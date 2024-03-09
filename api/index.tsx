import { Button, Frog } from "frog";
import teamsData from "./equipes_ncaa.json";
import { handle } from "frog/vercel";

type MatchResult = {
  m: number; // m pour "match"
  w: number; // w pour "winner"
};
interface Team {
  logo: string;
  name: string;
}
interface Teams {
  [key: string]: Team;
}

const teams: Teams = teamsData;
type State = {
  ps: number[]; // ps pour "participants"
  cmi: number; // cmi pour "currentMatchIndex"
  nr: number[]; // nr pour "nextRound"
  mn: number; // mn pour "matchNumber"
  ucs?: MatchResult[]; // ucs pour "userChoices"
  showSummary: boolean; // Initialisation du flag de sommaire à false
};

// Fonction pour initialiser ou réinitialiser l'état du tournoi
function initializeTournamentState(): State {
  // Générer les participants comme un tableau d'ID de 1 à 32
  let ps = Array.from({ length: 64 }, (_, index) => index + 1);
  return {
    ps,
    cmi: 0,
    nr: [],
    mn: 1,
    ucs: [],
    showSummary: false, // Initialisation du flag de sommaire à false
  };
}

export const app = new Frog<{ State: State }>({
  initialState: initializeTournamentState(),
});

//@ts-ignore
app.frame("/", (c) => {
  const { buttonValue, deriveState } = c;
  //@ts-ignore
  const state = deriveState((previousState) => {
    if (buttonValue === "reset") {
      return initializeTournamentState();
    }
    if (buttonValue === "summary") {
      return { ...previousState, showSummary: !previousState.showSummary };
    }

    if (buttonValue && buttonValue.startsWith("select-")) {
      const selectedIndex = parseInt(buttonValue.split("-")[1], 10);
      const isWinner =
        previousState.ps[previousState.cmi] === selectedIndex ||
        previousState.ps[previousState.cmi + 1] === selectedIndex;

      if (isWinner) {
        const winnerIndex = selectedIndex;

        previousState.nr.push(winnerIndex);
        if (!previousState.ucs) previousState.ucs = []; // Vérifier si ucs est défini
        previousState.ucs.push({
          m: previousState.mn, // Mettre à jour le numéro du match
          w: winnerIndex,
        });

        previousState.mn++;

        if (previousState.cmi + 2 < previousState.ps.length) {
          previousState.cmi += 2;
        } else {
          if (previousState.nr.length === 1) {
            previousState.ps = [previousState.nr[0]];
          } else {
            previousState.ps = [...previousState.nr];
            previousState.nr = [];
            previousState.cmi = 0;
          }
        }
      }
    }
  });
  if (state.ps.length === 1) {
    const ucsSummary =
      state.ucs && state.ucs.length > 0
        ? state.ucs
            .map((choice) => `Match ${choice.m}: Winner ID ${choice.w}`)
            .join("///")
        : "No choices made.";

    return c.res({
      image: (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            fontSize: 10,
          }}
        >
          <div style={{ display: "flex", color: "white", fontSize: "1rem" }}>
            Winner ID: {state.ps[0]}
          </div>
          <div style={{ display: "flex", color: "black", fontSize: "1rem" }}>
            Choices: {ucsSummary}
          </div>
        </div>
      ),
      intents: [<Button.Reset>Reset Tournament</Button.Reset>],
    });
  } else {
    // Assurez-vous que nous avons deux participants pour le match actuel avant de continuer
    if (state.ps.length > state.cmi + 1) {
      const matchParticipants = [state.ps[state.cmi], state.ps[state.cmi + 1]];

      return c.res({
        imageOptions: { width: 600, height: 600 },
        image: (
          <div
            style={{
              backgroundColor: "#202020	",
              color: "white",
              flexDirection: "column",
              display: "flex",
              fontSize: 60,
              width: "100%",
              textAlign: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: `${Math.round((state.mn / 64) * 100)}%`,
                height: "20px",
                background: "green",
                borderRadius: "3px",
                color: "white",
                textAlign: "center",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                backgroundColor: "lightgray",
                borderRadius: "1000px",
                fontSize: "2rem",
                textAlign: "center",
                margin: "0 auto",
                width: "30%",
              }}
            >
              {roundTest(state.mn, "tqt")}
            </div>
            <div
              style={{ display: "flex", color: "white", fontSize: "2rem" }}
              className="match__wrapper"
            >
              {...matchParticipants.map((id) => (
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    flex: "1",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img width="200" src={teams[id].logo} alt="" />
                  <p
                    style={{
                      color: "yellow",
                      fontSize: "2.4rem",
                    }}
                  >
                    {teams[id].name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ),
        intents: [
          ...matchParticipants.map((id) => (
            <Button value={`select-${id}`}>{teams[id].name}</Button>
          )),
          <Button.Reset>Reset Tournament</Button.Reset>,
          <Button action="/summary" value="summary">
            Summary
          </Button>,
        ],
      });
    }
  }
});

app.frame("/summary", (c) => {
  const state = c.previousState;
  return c.res({
    image: (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.ucs?.map((uc) => (
          <img
            width="96"
            style={{
              border: roundTest(uc.m),
              padding: "10px",
              width: "86px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
            src={teams[uc.w].logo}
            alt=""
          />
        ))}
      </div>
    ),
    intents: [
      <Button action="/" value="back">
        Go back
      </Button>,
    ],
  });
});

function roundTest(matchNum: number, i?: string): JSX.Element | string {
  if (matchNum <= 8) {
    return i ? <p>South - 1/8</p> : "8px solid green";
  } else if (matchNum <= 16) {
    return i ? <p>East - 1/8</p> : "8px solid red";
  } else if (matchNum <= 24) {
    return i ? <p>Midwest - 1/8</p> : "8px solid orange";
  } else if (matchNum <= 32) {
    return i ? <p>West - 1/8</p> : "8px solid blue";
  } else if (matchNum <= 36) {
    return i ? <p>South - 1/4</p> : "8px solid green";
  } else if (matchNum <= 40) {
    return i ? <p>East - 1/4</p> : "8px solid red";
  } else if (matchNum <= 44) {
    return i ? <p>Midwest - 1/4</p> : "8px solid orange";
  } else if (matchNum <= 48) {
    return i ? <p>West - 1/4</p> : "8px solid blue";
  } else if (matchNum <= 50) {
    return i ? <p>South - 1/2</p> : "8px solid green";
  } else if (matchNum <= 52) {
    return i ? <p>East - 1/2</p> : "8px solid red";
  } else if (matchNum <= 54) {
    return i ? <p>Midwest - 1/2</p> : "8px solid orange";
  } else if (matchNum <= 56) {
    return i ? <p>West - 1/2</p> : "8px solid blue";
  } else if (matchNum === 57) {
    return i ? <p>South - Finale</p> : "10px solid green";
  } else if (matchNum === 58) {
    return i ? <p>East - Finale</p> : "10px solid red";
  } else if (matchNum === 59) {
    return i ? <p>Midwest - Finale</p> : "10px solid orange";
  } else if (matchNum === 60) {
    return i ? <p>West - Finale</p> : "10px solid blue";
  } else if (matchNum === 61) {
    return <p>SOUTH VS EAST</p>;
  } else if (matchNum === 62) {
    return <p>MIDWEST VS WEST</p>;
  } else if (matchNum === 63) {
    return <p>FINALE</p>;
  } else {
    return ""; // Retour par défaut pour tout numéro de match non géré
  }
}
export const GET = handle(app);
export const POST = handle(app);
