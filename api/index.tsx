import { Button, Frog } from "frog";
import { pinata } from "frog/hubs";
import { handle } from "frog/vercel";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const bearerToken = process.env.BEARER_TOKEN;
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

const primaryColor = "#AE3EFF";
const bgColor = "#101013";
const white = "#F4EFE9";

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
  ps: number[]; // ps for "participants"
  cmi: number; // cmi for "currentMatchIndex"
  nr: number[]; // nr for "nextRound"
  mn: number; // mn for "matchNumber"
  ucs?: MatchResult[]; // ucs for "userChoices"
  showSummary: boolean;
};

function initializeTournamentState(): State {
  let ps = Array.from({ length: 8 }, (_, index) => index + 1);
  return {
    ps,
    cmi: 0,
    nr: [],
    mn: 1,
    ucs: [],
    showSummary: false,
  };
}

export const app = new Frog<{ State: State }>({
  assetsPath: "/",
  basePath: "/api",
  hub: pinata(),
  initialState: initializeTournamentState(),
});

//@ts-ignore
app.frame("/", (c) => {
  const { buttonValue, deriveState, verified } = c;
  //@ts-ignore
  const state = deriveState((previousState) => {
    if (verified) {
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

        if (!previousState.ucs) previousState.ucs = [];
        previousState.ucs.push({
          m: previousState.mn,
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
    }
  });
  if (state.ps.length === 1) {
    return c.res({
      image: (
        <div
          style={{
            backgroundColor: bgColor,
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
              color: white,
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
                border: "4px solid #f4efe9",
              }}
              src={teams[state.ps[0]].logo}
              alt=""
            />
            <p>{teams[state.ps[0]].name}</p>
          </div>
        </div>
      ),
      intents: [
        <Button.Reset>Reset Tournament</Button.Reset>,
        <Button action="/finish">Complete bet</Button>,
      ],
    });
  } else {
    // Assurez-vous que nous avons deux participants pour le match actuel avant de continuer
    if (state.ps.length > state.cmi + 1) {
      const matchParticipants = [state.ps[state.cmi], state.ps[state.cmi + 1]];

      return c.res({
        image: (
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              fontSize: 60,
              width: "100%",
              textAlign: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <img
              width="15%"
              height="15%"
              src="/logo.png"
              style={{
                position: "absolute",
                top: "17%",
                left: "12%",
                opacity: ".2",
                transform: "translate(-50%,-40%)",
              }}
            />
            <div style={{ display: "flex", flex: "0" }}>
              <span
                style={{
                  display: "flex",
                  width: `${Math.round((state.mn / 64) * 100)}%`,
                  height: "20px",
                  background: primaryColor,
                  textAlign: "center",
                  position: "relative",
                }}
              ></span>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingBottom: "25px",
                  fontSize: "2rem",
                  width: "120px",
                  height: "120px",
                  color: "white",
                  position: "absolute",
                  top: "-90px",
                  right: "-13px",
                  transform: "translateY(0%)",
                  backgroundColor: bgColor,
                  border: `5px solid ${primaryColor}`,
                  borderRadius: "50%",
                }}
              >
                {Math.round((state.mn / 64) * 100)}%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "1rem",
                fontSize: "1.8rem",
                textAlign: "center",
                margin: "0 auto",
                width: "40%",
                border: `6px solid ${primaryColor}`,
                backgroundColor: bgColor,
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "15%",
                  color: white,
                  fontSize: "2rem",
                  letterSpacing: "-1px",
                }}
              >
                {roundTest(state.mn, "tournamentStatus")}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                color: white,
                fontSize: "2rem",
                justifyContent: "space-between",
                height: "65%",
              }}
              className="match__wrapper"
            >
              {...matchParticipants.map((id) => (
                <div
                  style={{
                    flex: "2",
                    display: "flex",
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
                      opacity: ".1",
                    }}
                  />
                  <img width="210" height="210" src={teams[id].logo} alt="" />
                  <p
                    style={{
                      color: white,
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
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          flexWrap: "wrap",
        }}
      >
        {state.ucs?.map((uc) => (
          <div style={{ display: "flex" }}>
            <img
              width="96"
              style={{
                border: roundTest(uc.m),
                padding: "10px",
                width: "86px",
                borderRadius: "50%",
                backgroundColor: white,
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

// Votre code précédent reste le même jusqu'à cette partie

app.frame("/finish", async (c) => {
  const ucs = c.previousState.ucs;
  const fid = c.frameData?.fid;
  let userData = [];

  if (fid) {
    try {
      const response = await axios.get(
        `https://api.pinata.cloud/v3/farcaster/users/${fid}`,
        {
          headers: { Authorization: `Bearer ${bearerToken}` },
        }
      );
      userData = response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données utilisateur :",
        error
      );
    }
  }
  if (ucs && userData) {
    try {
      const postResponse = await axios.post(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        {
          pinataContent: {
            ucs,
            userData,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Réponse POST :", postResponse.data);
    } catch (postError) {
      console.error("Erreur lors de l'envoi des données :", postError);
    }
  }

  return c.res({
    image: (
      <div style={{ display: "flex", color: "white", fontSize: "3rem" }}>
        Saulo the best
      </div>
    ),
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
    return i ? <p>Final Four</p> : "10px solid yellow";
  } else if (matchNum === 62) {
    return i ? <p>Final Four</p> : "10px solid yellow";
  } else if (matchNum === 63) {
    return i ? <p>NCAA championship</p> : "10px solid yellow";
  } else {
    return ""; // Retour par défaut pour tout numéro de match non géré
  }
}

export const GET = handle(app);
export const POST = handle(app);
