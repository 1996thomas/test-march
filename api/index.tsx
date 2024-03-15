import { Button, Frog } from "frog";
import { pinata } from "frog/hubs";
import { handle } from "frog/vercel";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const bearerToken = process.env.BEARER_TOKEN;
const teamsData = {
  "1": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1255&width=100",
    name: "Alabama Crimson Tide",
  },
  "2": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1164&width=100",
    name: "Texas A&M-CC Islanders",
  },
  "3": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1061&width=100",
    name: "Maryland Terrapins",
  },
  "4": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=380&width=100",
    name: "West Virginia Mountaineers",
  },
  "5": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1234&width=100",
    name: "San Diego State Aztecs",
  },
  "6": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1309&width=100",
    name: "Charleston Cougars",
  },
  "7": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=307&width=100",
    name: "Virginia Cavaliers",
  },
  "8": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1312&width=100",
    name: "Furman Paladins",
  },
  "9": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1220&width=100",
    name: "Creighton Bluejays",
  },
  "10": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1063&width=100",
    name: "North Carolina State Wolfpack",
  },
  "11": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1075&width=100",
    name: "Baylor Bears",
  },
  "12": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1132&width=100",
    name: "UC Santa Barbara Gauchos",
  },
  "13": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1079&width=100",
    name: "Missouri Tigers",
  },
  "14": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1336&width=100",
    name: "Utah State Aggies",
  },
  "15": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1297&width=100",
    name: "Arizona Wildcats",
  },
  "16": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1174&width=100",
    name: "Princeton Tigers",
  },
  "17": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1122&width=100",
    name: "Purdue Boilermakers",
  },
  "18": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1237&width=100",
    name: "Fairleigh Dickinson Knights",
  },
  "19": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1348&width=100",
    name: "Memphis Tigers",
  },
  "20": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=329&width=100",
    name: "Florida Atlantic Owls",
  },
  "21": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1060&width=100",
    name: "Duke Blue Devils",
  },
  "22": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1213&width=100",
    name: "Oral Roberts Golden Eagles",
  },
  "23": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1264&width=100",
    name: "Tennessee Volunteers",
  },
  "24": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1268&width=100",
    name: "Louisiana-Lafayette Ragin' Cajuns",
  },
  "25": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1259&width=100",
    name: "Kentucky Wildcats",
  },
  "26": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1110&width=100",
    name: "Providence Friars",
  },
  "27": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1078&width=100",
    name: "Kansas State Wildcats",
  },
  "28": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1089&width=100",
    name: "Montana State Fighting Bobcats",
  },
  "29": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1118&width=100",
    name: "Michigan State Spartans",
  },
  "30": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1304&width=100",
    name: "USC Trojans",
  },
  "31": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1107&width=100",
    name: "Marquette Golden Eagles",
  },
  "32": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=316&width=100",
    name: "Vermont Catamounts",
  },
  "33": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1485&width=100",
    name: "Houston Cougars",
  },
  "34": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1473&width=100",
    name: "Northern Kentucky Norse",
  },
  "35": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1116&width=100",
    name: "Iowa Hawkeyes",
  },
  "36": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1257&width=100",
    name: "Auburn Tigers",
  },
  "37": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1062&width=100",
    name: "Miami (FL) Hurricanes",
  },
  "38": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1221&width=100",
    name: "Drake Bulldogs",
  },
  "39": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1350&width=100",
    name: "Indiana Hoosiers",
  },
  "40": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1191&width=100",
    name: "Kent State Golden Flashes",
  },
  "41": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1077&width=100",
    name: "Iowa State Cyclones",
  },
  "42": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1109&width=100",
    name: "Pittsburgh Panthers",
  },
  "43": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=325&width=100",
    name: "Xavier Musketeers",
  },
  "44": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1515&width=100",
    name: "Kennesaw State Owls",
  },
  "45": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1084&width=100",
    name: "Texas A&M Aggies",
  },
  "46": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1121&width=100",
    name: "Penn State Nittany Lions",
  },
  "47": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1083&width=100",
    name: "Texas Longhorns",
  },
  "48": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1250&width=100",
    name: "Colgate Raiders",
  },
  "49": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=400&width=100",
    name: "Kansas Jayhawks",
  },
  "50": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1202&width=100",
    name: "Howard Bison",
  },
  "51": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1256&width=100",
    name: "Arkansas Razorbacks",
  },
  "52": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1115&width=100",
    name: "Illinois Fighting Illini",
  },
  "53": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1342&width=100",
    name: "Saint Mary's Gaels",
  },
  "54": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1142&width=100",
    name: "VCU Rams",
  },
  "55": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1102&width=100",
    name: "Connecticut Huskies",
  },
  "56": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1178&width=100",
    name: "Iona Gaels",
  },
  "57": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1235&width=100",
    name: "TCU Horned Frogs",
  },
  "58": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1298&width=100",
    name: "Arizona State Sun Devils",
  },
  "59": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=417&width=100",
    name: "Gonzaga Bulldogs",
  },
  "60": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=13667&width=100",
    name: "Grand Canyon Antelopes",
  },
  "61": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1119&width=100",
    name: "Northwestern Wildcats",
  },
  "62": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1328&width=100",
    name: "Boise State Broncos",
  },
  "63": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1303&width=100",
    name: "UCLA Bruins",
  },
  "64": {
    logo: "https://www.proballers.com/api/getTeamLogo?id=1097&width=100",
    name: "UNC Asheville Bulldogs",
  },
};

const primaryColor = "#0087F7";
const bgColor = "#101013";
const white = "#F4EFE9";

const regionColor = {
  south: "#00C1AD",
  midwest: "#FFA901",
  west: "#AB87FF",
  east: "#E54E47",
  final_four: "#0087F7",
  final: "#0087F7",
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
  ps: number[]; // ps for "participants"
  cmi: number; // cmi for "currentMatchIndex"
  nr: number[]; // nr for "nextRound"
  mn: number; // mn for "matchNumber"
  ucs?: MatchResult[]; // ucs for "userChoices"
  showSummary: boolean;
};

function initializeTournamentState(): State {
  let ps = Array.from({ length: 64 }, (_, index) => index + 1);
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
  browserLocation: "/",
  hub: pinata(),
  initialState: initializeTournamentState(),
});
app.frame("/", async (c) => {
  return c.res({
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "9rem",
          gap: "2rem",
        }}
      >
        <img
          src="/background.png"
          width={1200}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          alt=""
        />
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <img src="/Eco.png" height={90} alt="" />
          <p style={{ fontSize: "2rem", color: white }}>X</p>
          <img src="/Krause_House.png" height={90} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ color: primaryColor, fontSize: "5rem" }}>
            March Madness 2024
          </p>
          <p style={{ color: white, fontSize: "3rem" }}>Bracket Tourney</p>
        </div>

        <p
          style={{
            alignText: "center",
            color: regionColor.midwest,
            fontSize: "2rem",
          }}
        >
          Follow our Warpcast channel to be eligible to win the prize.
        </p>
      </div>
    ),
    intents: [
      <Button action="/tournament">Enter the contest</Button>,
      <Button.Link href="https://warpcast.com/~/channel/framemadness">
        Follow us
      </Button.Link>,
    ],
  });
});
//@ts-ignore
app.frame("/tournament", async (c) => {
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
            flexDirection: "column",
            display: "flex",
            width: "100%",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src="/background.png"
            width={1200}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "4rem", color: primaryColor }}>Your Winner</p>
            <img
              width={350}
              height={350}
              src={teams[state.ps[0]].logo}
              alt=""
            />
            <p>{teams[state.ps[0]].name}</p>
          </div>

          <p
            style={{
              alignText: "center",
              color: regionColor.midwest,
              fontSize: 30,
            }}
          >
            Follow our Warpcast channel to be eligible to win a prize.
          </p>
        </div>
      ),
      intents: [
        <Button action="/finish">Submit</Button>,
        <Button action="/summary" value="summary">
          Summary
        </Button>,
        <Button.Reset>Reset Tournament</Button.Reset>,
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
              width: "100%",
              justifyContent: "space-between",
              height: "100%",
              textAlign: "center",
            }}
          >
            <img
              src="/background.png"
              width={1200}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
              alt=""
            />
            <div style={{ display: "flex", flex: "0" }}>
              {/* @ts-ignore */}
              {Math.round((state.mn / 64) * 100 > 3) && (
                <span
                  style={{
                    width: `${Math.round((state.mn / 70) * 100)}%`,
                    height: "18px",
                    backgroundColor: roundTest(state.mn, "progress"),
                    margin: "2rem",
                    borderRadius: 100,
                    position: "relative",
                    minWidth: "50px",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      color: white,
                      fontSize: "1.5rem",
                      position: "absolute",
                      right: "0",
                      top: "0",
                      transform: "translate(120%,-72%)",
                    }}
                  >
                    {Math.round((state.mn / 64) * 100)}%
                  </p>
                </span>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                justifyContent: "center",
                opacity: ".3",
                marginTop: "5rem",
              }}
            >
              <img src="/Eco.png" height={65} alt="" />
              <p style={{ fontSize: "2rem", color: white }}>X</p>
              <img src="/Krause_House.png" height={65} alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "1rem",
                flexDirection: "column",
                fontSize: "1.8rem",
                textAlign: "center",
                margin: "0 auto",
                width: "40%",
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, 0%)",
              }}
            >
              {roundTest(state.mn, "tournamentStatus")}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: white,
                fontSize: "2rem",
                height: "67%",
              }}
            >
              {...matchParticipants.map((id, i) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    alignItems: "center",
                    width: "50%",
                    padding: i === 0 ? "0 20% 0 18px" : "0 18px 0 20%",
                  }}
                >
                  <img width="250" height="250" src={teams[id].logo} alt="" />
                  <p
                    style={{
                      color: white,
                      fontSize: "2rem",
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
          <Button.Reset>Reset</Button.Reset>,
        ],
      });
    }
  }
});

app.frame("/summary", (c) => {
  const state = c.previousState;
  const button = c.buttonValue;
  return c.res({
    image: (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <img
          src="/background.png"
          width={1200}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          alt=""
        />
        {state.ucs?.map((uc) => (
          <div style={{ display: "flex" }}>
            <img
              width="85"
              style={{
                border: roundTest(uc.m),
                padding: "10px",
                width: "86px",
                borderRadius: "50%",
                backgroundColor: bgColor,
              }}
              src={teams[uc.w].logo}
              alt=""
            />
          </div>
        ))}
      </div>
    ),
    intents: [
      <Button
        action={button === "final_summary" ? "/finish" : "/tournament"}
        value="back"
      >
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
          headers: { Authorization: `Bearer 123` },
        }
      );
      userData = response.data;
    } catch (error) {
      return c.res({
        image: (
          <div style={{ display: "flex" }}>
            <p style={{ color: "white", fontSize: "2rem" }}>
              Error while posting data on Pinata, try later
            </p>
          </div>
        ),
        intents: <Button action="/finish">Retry</Button>,
      });
    }
  }
  if (ucs && userData) {
    const userInformation = {
      username: userData.data.username,
      display_name: userData.data.display_name,
      fid: userData.data.fid,
      avatar: userData.data.pfp_url,
      custody_address: userData.data.custody_address,
      recovery_address: userData.data.custody_address,
    };

    try {
      const postResponse = await axios.post(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        {
          pinataContent: {
            userInformation,
            ucs,
          },
          pinataMetadata: {
            name: `${userInformation.username}'s choices`,
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
    } catch (error) {
      return c.res({
        image: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/background.png"
              width={1200}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
              alt=""
            />
            <p style={{ color: regionColor.midwest, fontSize: "3rem" }}>
              Error while posting data on Pinata, try later
            </p>
          </div>
        ),
        intents: [<Button action="/finish">🔁 Retry 🔁</Button>],
      });
    }
  }

  return c.res({
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/background.png"
          width={1200}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          alt=""
        />
        <p style={{ fontSize: "4rem", color: primaryColor }}>
          Mint Your Bracket on Base
        </p>
        <p style={{ color: white, fontSize: "2rem" }}>
          Don't forget to mint your official participation NFT !
        </p>
      </div>
    ),
    intents: [
      <Button>Mint</Button>,
      <Button action="/continue">Continue</Button>,
    ],
  });
});

app.frame("/continue", (c) => {
  return c.res({
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/background.png"
          width={1200}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          alt=""
        />
        <p style={{ fontSize: "4rem", color: primaryColor }}>
          Congratulations! 🎉
        </p>
        <p
          style={{
            color: white,
            fontSize: "2rem",
            textAlign: "center",
            width: "80%",
          }}
        >
          Your bracket has been submitted. Follow all the action on our channel
          and your position on the leaderboard.
        </p>
        <p style={{ color: white, fontSize: "2rem", textAlign: "center" }}>
          Good luck!
        </p>
      </div>
    ),
    intents: [
      <Button.Link href="https://example.com">Leaderboard</Button.Link>,
    ],
  });
});

function roundTest(matchNum: number, i?: string): JSX.Element | string {
  if (matchNum <= 8) {
    if (i === "progress") {
      return regionColor.south;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.south }}>
          South Region
        </p>
        <p style={{ color: white }}>First round</p>
      </div>
    ) : (
      `8px solid ${regionColor.south}`
    );
  } else if (matchNum <= 16) {
    if (i === "progress") {
      return regionColor.east;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.east }}>
          East Region
        </p>
        <p style={{ color: white }}>First round</p>
      </div>
    ) : (
      `8px solid ${regionColor.east}`
    );
  } else if (matchNum <= 24) {
    if (i === "progress") {
      return regionColor.midwest;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.midwest }}>
          Midwest Region
        </p>
        <p style={{ color: white }}>First round</p>
      </div>
    ) : (
      `8px solid ${regionColor.midwest}`
    );
  } else if (matchNum <= 32) {
    if (i === "progress") {
      return regionColor.west;
    }
    if (i === "progress") {
      return regionColor.west;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.west }}>
          West Region
        </p>
        <p style={{ color: white }}>First round</p>
      </div>
    ) : (
      `8px solid ${regionColor.west}`
    );
  } else if (matchNum <= 36) {
    if (i === "progress") {
      return regionColor.south;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.south }}>
          South Region
        </p>
        <p style={{ color: white }}>Second round</p>
      </div>
    ) : (
      `8px solid ${regionColor.south}`
    );
  } else if (matchNum <= 40) {
    if (i === "progress") {
      return regionColor.east;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.east }}>
          East Region
        </p>
        <p style={{ color: white }}>Second round</p>
      </div>
    ) : (
      `8px solid ${regionColor.east}`
    );
  } else if (matchNum <= 44) {
    if (i === "progress") {
      return regionColor.midwest;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.midwest }}>
          Midwest Region
        </p>
        <p style={{ color: white }}>Second round</p>
      </div>
    ) : (
      `8px solid ${regionColor.midwest}`
    );
  } else if (matchNum <= 48) {
    if (i === "progress") {
      return regionColor.west;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.west }}>
          West Region
        </p>
        <p style={{ color: white }}>Second round</p>
      </div>
    ) : (
      `8px solid ${regionColor.west}`
    );
  } else if (matchNum <= 50) {
    if (i === "progress") {
      return regionColor.south;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.south }}>
          South Region
        </p>
        <p style={{ color: white }}>Sweet 16</p>
      </div>
    ) : (
      `8px solid ${regionColor.south}`
    );
  } else if (matchNum <= 52) {
    if (i === "progress") {
      return regionColor.east;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.east }}>
          East Region
        </p>
        <p style={{ color: white }}>Sweet 16</p>
      </div>
    ) : (
      `8px solid ${regionColor.east}`
    );
  } else if (matchNum <= 54) {
    if (i === "progress") {
      return regionColor.midwest;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.midwest }}>
          Midwest Region
        </p>
        <p style={{ color: white }}>Sweet 16</p>
      </div>
    ) : (
      `8px solid ${regionColor.midwest}`
    );
  } else if (matchNum <= 56) {
    if (i === "progress") {
      return regionColor.west;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.west }}>
          West Region
        </p>
        <p style={{ color: white }}>Sweet 16</p>
      </div>
    ) : (
      `8px solid ${regionColor.west}`
    );
  } else if (matchNum === 57) {
    if (i === "progress") {
      return regionColor.south;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.south }}>
          South Region
        </p>
        <p style={{ color: white }}>Elite Eight</p>
      </div>
    ) : (
      `10px solid ${regionColor.south}`
    );
  } else if (matchNum === 58) {
    if (i === "progress") {
      return regionColor.east;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.east }}>
          East Region
        </p>
        <p style={{ color: white }}>Elite Eight</p>
      </div>
    ) : (
      `10px solid ${regionColor.east}`
    );
  } else if (matchNum === 59) {
    if (i === "progress") {
      return regionColor.midwest;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.midwest }}>
          Midwest Region
        </p>
        <p style={{ color: white }}>Elite Eight</p>
      </div>
    ) : (
      `10px solid ${regionColor.midwest}`
    );
  } else if (matchNum === 60) {
    if (i === "progress") {
      return regionColor.west;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.west }}>
          West Region
        </p>
        <p style={{ color: white }}>Elite Eight</p>
      </div>
    ) : (
      `10px solid ${regionColor.west}`
    );
  } else if (matchNum === 61 || matchNum === 62) {
    if (i === "progress") {
      return regionColor.final_four;
    }
    return i ? (
      <p
        style={{
          fontSize: "3.5rem",
          color: regionColor.final_four,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Final Four
      </p>
    ) : (
      `10px solid ${regionColor.final}`
    );
  } else if (matchNum === 62) {
    if (i === "progress") {
      return regionColor.final_four;
    }
    return i ? (
      <p style={{ fontSize: "3.5rem", color: regionColor.final_four }}>
        Final Four
      </p>
    ) : (
      "10px solid yellow"
    );
  } else if (matchNum === 63) {
    if (i === "progress") {
      return regionColor.final;
    }
    return i ? (
      <p style={{ fontSize: "3.5rem", color: regionColor.final }}>
        NCAA championship
      </p>
    ) : (
      "10px solid yellow"
    );
  } else {
    return ""; // Retour par défaut pour tout numéro de match non géré
  }
}

export const GET = handle(app);
export const POST = handle(app);
