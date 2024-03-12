import { Button, Frog } from "frog";
import { handle } from "frog/vercel";

const teamsData = {
  "1": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1255&width=150",
    name: "Alabama Crimson Tide",
  },
  "2": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1164&width=150",
    name: "Texas A&M-CC Islanders",
  },
  "3": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1061&width=150",
    name: "Maryland Terrapins",
  },
  "4": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=380&width=150",
    name: "West Virginia Mountaineers",
  },
  "5": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1234&width=150",
    name: "San Diego State Aztecs",
  },
  "6": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1309&width=150",
    name: "Charleston Cougars",
  },
  "7": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=307&width=150",
    name: "Virginia Cavaliers",
  },
  "8": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1312&width=150",
    name: "Furman Paladins",
  },
  "9": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1220&width=150",
    name: "Creighton Bluejays",
  },
  "10": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1063&width=150",
    name: "North Carolina State Wolfpack",
  },
  "11": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1075&width=150",
    name: "Baylor Bears",
  },
  "12": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1132&width=150",
    name: "UC Santa Barbara Gauchos",
  },
  "13": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1079&width=150",
    name: "Missouri Tigers",
  },
  "14": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1336&width=150",
    name: "Utah State Aggies",
  },
  "15": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1297&width=150",
    name: "Arizona Wildcats",
  },
  "16": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1174&width=150",
    name: "Princeton Tigers",
  },
  "17": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1122&width=150",
    name: "Purdue Boilermakers",
  },
  "18": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1237&width=150",
    name: "Fairleigh Dickinson Knights",
  },
  "19": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1348&width=150",
    name: "Memphis Tigers",
  },
  "20": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=329&width=150",
    name: "Florida Atlantic Owls",
  },
  "21": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1060&width=150",
    name: "Duke Blue Devils",
  },
  "22": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1213&width=150",
    name: "Oral Roberts Golden Eagles",
  },
  "23": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1264&width=150",
    name: "Tennessee Volunteers",
  },
  "24": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1268&width=150",
    name: "Louisiana-Lafayette Ragin' Cajuns",
  },
  "25": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1259&width=150",
    name: "Kentucky Wildcats",
  },
  "26": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1110&width=150",
    name: "Providence Friars",
  },
  "27": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1078&width=150",
    name: "Kansas State Wildcats",
  },
  "28": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1089&width=150",
    name: "Montana State Fighting Bobcats",
  },
  "29": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1118&width=150",
    name: "Michigan State Spartans",
  },
  "30": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1304&width=150",
    name: "USC Trojans",
  },
  "31": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1107&width=150",
    name: "Marquette Golden Eagles",
  },
  "32": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=316&width=150",
    name: "Vermont Catamounts",
  },
  "33": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1485&width=150",
    name: "Houston Cougars",
  },
  "34": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1473&width=150",
    name: "Northern Kentucky Norse",
  },
  "35": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1116&width=150",
    name: "Iowa Hawkeyes",
  },
  "36": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1257&width=150",
    name: "Auburn Tigers",
  },
  "37": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1062&width=150",
    name: "Miami (FL) Hurricanes",
  },
  "38": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1221&width=150",
    name: "Drake Bulldogs",
  },
  "39": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1350&width=150",
    name: "Indiana Hoosiers",
  },
  "40": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1191&width=150",
    name: "Kent State Golden Flashes",
  },
  "41": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1077&width=150",
    name: "Iowa State Cyclones",
  },
  "42": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1109&width=150",
    name: "Pittsburgh Panthers",
  },
  "43": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=325&width=150",
    name: "Xavier Musketeers",
  },
  "44": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1515&width=150",
    name: "Kennesaw State Owls",
  },
  "45": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1084&width=150",
    name: "Texas A&M Aggies",
  },
  "46": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1121&width=150",
    name: "Penn State Nittany Lions",
  },
  "47": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1083&width=150",
    name: "Texas Longhorns",
  },
  "48": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1250&width=150",
    name: "Colgate Raiders",
  },
  "49": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=400&width=150",
    name: "Kansas Jayhawks",
  },
  "50": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1202&width=150",
    name: "Howard Bison",
  },
  "51": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1256&width=150",
    name: "Arkansas Razorbacks",
  },
  "52": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1115&width=150",
    name: "Illinois Fighting Illini",
  },
  "53": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1342&width=150",
    name: "Saint Mary's Gaels",
  },
  "54": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1142&width=150",
    name: "VCU Rams",
  },
  "55": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1102&width=150",
    name: "Connecticut Huskies",
  },
  "56": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1178&width=150",
    name: "Iona Gaels",
  },
  "57": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1235&width=150",
    name: "TCU Horned Frogs",
  },
  "58": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1298&width=150",
    name: "Arizona State Sun Devils",
  },
  "59": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=417&width=150",
    name: "Gonzaga Bulldogs",
  },
  "60": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=13667&width=150",
    name: "Grand Canyon Antelopes",
  },
  "61": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1119&width=150",
    name: "Northwestern Wildcats",
  },
  "62": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1328&width=150",
    name: "Boise State Broncos",
  },
  "63": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1303&width=150",
    name: "UCLA Bruins",
  },
  "64": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1097&width=150",
    name: "UNC Asheville Bulldogs",
  },
};

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
  let ps = Array.from({ length: 8 }, (_, index) => index + 1);
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
  assetsPath: '/',
  basePath: '/api',
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
    return c.res({
      image: (
        <div
          style={{
            backgroundColor: "#909090",
            flexDirection: "column",
            display: "flex",
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: "3rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img
              width={400}
              height={400}
              style={{
                borderRadius: "100px",
                padding: "0",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
              src={teams[state.ps[0]].logo}
              alt=""
            />
            <p>{teams[state.ps[0]].name}</p>
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
        image: (
          <div
            style={{
              backgroundColor: "#909090",
              flexDirection: "column",
              display: "flex",
              fontSize: 60,
              width: "100%",
              textAlign: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", flex: "0" }}>
              <span
                style={{
                  display: "flex",
                  width: `${Math.round((state.mn / 64) * 100)}%`,
                  height: "30px",
                  background: "#90EE90,",
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                }}
              ></span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "1000px",
                fontSize: "1.8rem",
                textAlign: "center",
                margin: "0 auto",
                width: "40%",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                opacity: ".9",
              }}
            >
              <div style={{ display: "flex", height: "15%" }}>
                {roundTest(state.mn, "tournamentStatus")}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                color: "white",
                fontSize: "2rem",
                justifyContent: "space-between",
                height: "70%",
              }}
              className="match__wrapper"
            >
              {...matchParticipants.map((id) => (
                <div
                  style={{
                    flex: "2",
                    display: "flex",
                    color: "lightGray",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      position: "absolute",
                      height: "50vw",
                      width: "50vw",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-60%)",
                      padding: "40px",
                      filter: "blur(100px)",
                      opacity: ".4",
                    }}
                  />
                  <img width="200" height="200" src={teams[id].logo} alt="" />

                  <p
                    style={{
                      color: "#090909",
                      fontSize: "2.9rem",
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
          <Button action="/summary" value="summary">
            Summary
          </Button>,
          <Button.Reset>⚠️ Reset ⚠️</Button.Reset>,
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
          <div style={{ display: "flex" }}>
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
          </div>
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
    return i ? <p>South - First round</p> : "8px solid green";
  } else if (matchNum <= 16) {
    return i ? <p>East - First round</p> : "8px solid red";
  } else if (matchNum <= 24) {
    return i ? <p>Midwest - First round</p> : "8px solid orange";
  } else if (matchNum <= 32) {
    return i ? <p>West - First round</p> : "8px solid blue";
  } else if (matchNum <= 36) {
    return i ? <p>South - Second round</p> : "8px solid green";
  } else if (matchNum <= 40) {
    return i ? <p>East - Second round</p> : "8px solid red";
  } else if (matchNum <= 44) {
    return i ? <p>Midwest - Second round</p> : "8px solid orange";
  } else if (matchNum <= 48) {
    return i ? <p>West - Second round</p> : "8px solid blue";
  } else if (matchNum <= 50) {
    return i ? <p>South - Sweet 16</p> : "8px solid green";
  } else if (matchNum <= 52) {
    return i ? <p>East - Sweet 16</p> : "8px solid red";
  } else if (matchNum <= 54) {
    return i ? <p>Midwest - Sweet 16</p> : "8px solid orange";
  } else if (matchNum <= 56) {
    return i ? <p>West - Sweet 16</p> : "8px solid blue";
  } else if (matchNum === 57) {
    return i ? <p>South - Elite Eight</p> : "10px solid green";
  } else if (matchNum === 58) {
    return i ? <p>East - Elite Eight</p> : "10px solid red";
  } else if (matchNum === 59) {
    return i ? <p>Midwest - Elite Eight</p> : "10px solid orange";
  } else if (matchNum === 60) {
    return i ? <p>West - Elite Eight</p> : "10px solid blue";
  } else if (matchNum === 61) {
    return <p>Final Four</p>;
  } else if (matchNum === 62) {
    return <p>Final Four</p>;
  } else if (matchNum === 63) {
    return <p>NCAA championship</p>;
  } else {
    return ""; // Retour par défaut pour tout numéro de match non géré
  }
}
export const GET = handle(app);
export const POST = handle(app);
