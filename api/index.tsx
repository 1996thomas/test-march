import { Button, Frog } from "frog";
import { pinata } from "frog/hubs";
import { handle } from "frog/vercel";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const bearerToken = process.env.BEARER_TOKEN;
const teamsData = {
  "1": {
    "logo": "https://i.imgur.com/AaWuRSx.png",
    "name": "Connecticut Huskies"
  },
  "2": {
    logo: "https://i.imgur.com/2elhHTg.png",
    name: "Stetson Hatters",
  },
  "3": {
    logo: "https://i.imgur.com/qvftkkT.png",
    name: "Florida Atlantic Owls",
  },
  "4": {
    logo: "https://i.imgur.com/YnoyzNj.png",
    name: "Northwestern Wildcats",
  },
  "5": {
    logo: "https://i.imgur.com/2iw9WdQ.png",
    name: "San Diego State Aztecs",
  },
  "6": {
    logo: "https://i.imgur.com/rMFmHwH.png",
    name: "UAB Blazers",
  },
  "7": {
    logo: "https://i.imgur.com/laQuBxG.png",
    name: "Auburn Tigers",
  },
  "8": {
    logo: "https://i.imgur.com/8FuABk5.png",
    name: "Yale Bulldogs",
  },
  "9": {
    logo: "https://i.imgur.com/5GnGTAG.png",
    name: "Brigham Young Cougars",
  },
  "10": {
    logo: "https://i.imgur.com/q3KiO5n.png",
    name: "Duquesne Dukes",
  },
  "11": {
    logo: "https://i.imgur.com/xjzHJ8n.png",
    name: "Illinois Fighting Illini",
  },

  "12": {
    logo: "https://i.imgur.com/tUwuD0y.png",
    name: "Morehead State Eagles",
  },
  "13": {
    logo: "https://i.imgur.com/0L3D4dn.png",
    name: "Washington State Cougars",
  },
  "14": {
    logo: "https://i.imgur.com/qFjv2iU.png",
    name: "Drake Bulldogs",
  },
  "15": {
    logo: "https://i.imgur.com/W4WAai6.png",
    name: "Iowa State Cyclones",
  },
  "16": {
    logo: "https://i.imgur.com/Wnpq2bd.png",
    name: "South Dakota State Jackrabbits",
  },
  "17": {
    logo: "https://i.imgur.com/nnUzmbf.png",
    name: "North Carolina Tar Heels",
  },
  "18": {
    logo: "https://i.imgur.com/CiWOp5o.png",
    name: " Howard/Wagner",
  },
  "19": {
    logo: "https://i.imgur.com/tTTDGUF.png",
    name: "Mississippi State Bulldogs",
  },
  "20": {
    logo: "https://i.imgur.com/Y1eVaKN.png",
    name: "Michigan State Spartans",
  },
  "21": {
    logo: "https://i.imgur.com/sW9GzGZ.png",
    name: "Saint Mary's Gaels",
  },
  "22": {
    logo: "https://i.imgur.com/x1BwyZT.png",
    name: "Grand Canyon Antelopes",
  },
  "23": {
    logo: "https://i.imgur.com/O9m6BkD.png",
    name: "Alabama Crimson Tide",
  },
  "24": {
    logo: "https://i.imgur.com/el6hdti.png",
    name: "Charleston Cougars",
  },
  "25": {
    logo: "https://i.imgur.com/9iQJ4ky.png",
    name: "Clemson Tigers",
  },
  "26": {
    logo: "https://i.imgur.com/KSPl040.png",
    name: "New Mexico Lobos",
  },
  "27": {
    logo: "https://i.imgur.com/GMAyg6x.png",
    name: "Baylor Bears",
  },
  "28": {
    logo: "https://i.imgur.com/mxrmsXR.png",
    name: "Colgate Raiders",
  },
  "29": {
    logo: "https://i.imgur.com/sME409i.png",
    name: "Dayton Flyers",
  },
  "30": {
    logo: "https://i.imgur.com/3Fgj3z1.png",
    name: "Nevada Wolf Pack",
  },
  "31": {
    logo: "https://i.imgur.com/USa3vO5.png",
    name: "Arizona Wildcats",
  },
  "32": {
    logo: "https://i.imgur.com/PBEY4za.png",
    name: "Long Beach State 49ers",
  },
  "33": {
    logo: "https://i.imgur.com/VrAQwnf.png",
    name: "Houston Cougars",
  },
  "34": {
    logo: "https://i.imgur.com/ncYb1kX.png",
    name: "Longwood Lancers",
  },
  "35": {
    logo: "https://i.imgur.com/NiMWSx7.png",
    name: "Nebraska Cornhuskers",
  },
  "36": {
    logo: "https://i.imgur.com/eISs94F.png",
    name: "Texas A&M Aggies",
  },
  "37": {
    logo: "https://i.imgur.com/FQPP91L.png",
    name: "Wisconsin Badgers",
  },
  "38": {
    logo: "https://i.imgur.com/n3vuFdu.png",
    name: "James Madison Dukes",
  },
  "39": {
    logo: "https://i.imgur.com/jU7ZSbY.png",
    name: "Duke Blue Devils",
  },
  "40": {
    logo: "https://i.imgur.com/cmwVrMx.png",
    name: "Vermont Catamounts",
  },
  "41": {
    logo: "https://i.imgur.com/MBYLfc3.png",
    name: "Texas Tech Red Raiders",
  },
  "42": {
    logo: "https://i.imgur.com/eJE9A2E.png",
    name: "North Carolina State Wolfpack",
  },
  "43": {
    logo: "https://i.imgur.com/mt5FKBs.png",
    name: "Kentucky Wildcats",
  },
  "44": {
    logo: "https://i.imgur.com/mblaZeT.png",
    name: "Oakland Golden Grizzlies",
  },
  "45": {
    logo: "https://i.imgur.com/ipRyyl7.png",
    name: "Florida Gators",
  },
  "46": {
    logo: "https://i.imgur.com/7tgBbkI.png",
    name: "Colorado/Boise St",
  },
  "47": {
    logo: "https://i.imgur.com/lrfc29Y.png",
    name: "Marquette Golden Eagles",
  },
  "48": {
    logo: "https://i.imgur.com/imttUFw.png",
    name: "Western Kentucky Hilltoppers",
  },
  "49": {
    logo: "https://i.imgur.com/w8GzP2h.png",
    name: "Purdue Boilermakers",
  },
  "50": {
    logo: "https://i.imgur.com/ygGg7Bq.png",
    name: "Grambling/Montana St",
  },
  "51": {
    logo: "https://i.imgur.com/RJ31oCJ.png",
    name: "Utah State Aggies",
  },
  "52": {
    logo: "https://i.imgur.com/EkAdooE.png",
    name: "TCU Horned Frogs",
  },
  "53": {
    logo: "https://i.imgur.com/jldR4Sk.png",
    name: "Gonzaga Bulldogs",
  },
  "54": {
    logo: "https://i.imgur.com/MlcgTsh.png",
    name: "Mcneese State Cowboys",
  },
  "55": {
    logo: "https://i.imgur.com/RRsEmaz.png",
    name: "Kansas Jayhawks",
  },
  "56": {
    logo: "https://i.imgur.com/Bt65YWh.png",
    name: "Samford Bulldogs",
  },
  "57": {
    logo: "https://i.imgur.com/QWWnLvb.png",
    name: "South Carolina Gamecocks",
  },
  "58": {
    logo: "https://i.imgur.com/TbrHh2c.png",
    name: "Oregon Ducks",
  },
  "59": {
    logo: "https://i.imgur.com/LXSh4Rk.png",
    name: "Creighton Bluejays",
  },
  "60": {
    logo: "https://i.imgur.com/2Xnm7rD.png",
    name: "Akron Zips",
  },
  "61": {
    logo: "https://i.imgur.com/OdnJotY.png",
    name: "Texas Longhorns",
  },
  "62": {
    logo: "https://i.imgur.com/1WFSzTL.png",
    name: "Colorodo St/Virginia",
  },
  "63": {
    logo: "https://i.imgur.com/WnahBAT.png",
    name: "Tennessee Volunteers",
  },
  "64": {
    logo: "https://i.imgur.com/xeQhx9l.png",
    name: "Saint Peter's Peacocks",
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
  // hub: pinata(),
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
          Follow /marchmadness to be eligible to win the prize.
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
    // if (verified) {
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
        // }
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
            Follow /marchmadness to be eligible to win the prize.
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
                flexDirection: "column",
                textAlign: "center",
                margin: "0 auto",
                width: "40%",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, 0%)",
                fontSize: "3rem",
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
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center",
          margin: "0 auto",
          justifyContent: "flex-start",
          paddingTop: "1rem",
          paddingLeft: "1rem",
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
        <p
          style={{
            color: primaryColor,
            fontSize: "3rem",
            marginRight: "4.5rem",
            lineHeight: ".2",
          }}
        >
          Summary
        </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem",
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
            <p
              style={{
                color: primaryColor,
                textAlign: "center",
                fontSize: "4rem",
              }}
            >
              Dang!! 😌
            </p>

            <p
              style={{
                color: white,
                textAlign: "center",
                fontSize: "2.3rem",
              }}
            >
              Everyone loves us so much that they broke the frame. There are too
              many players online at the same time; please try again later.
            </p>
          </div>
        ),
        intents: [<Button action="/finish">Retry</Button>],
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
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem",
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
            <p
              style={{
                color: primaryColor,
                textAlign: "center",
                fontSize: "4rem",
              }}
            >
              Dang!! 😌
            </p>

            <p
              style={{
                color: white,
                textAlign: "center",
                fontSize: "2.3rem",
              }}
            >
              Everyone loves us so much that they broke the frame. There are too
              many players online at the same time; please try again later.
            </p>
          </div>
        ),
        intents: [<Button action="/finish">Retry</Button>],
      });
    }
  }

  return c.res({
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
            fontSize: "1.8rem",
            textAlign: "center",
          }}
        >
          Your bracket was submitted, and the prizes are:
        </p>

        <p
          style={{
            color: white,
            fontSize: "1.8rem",
            textAlign: "center",
            margin: 0,
          }}
        >
          🥇 1st place - USDC
          <img
            src="/usdc.png"
            width={36}
            height={36}
            alt=""
            style={{ marginRight: ".2rem", marginLeft: "1rem" }}
          />
          400{" "}
        </p>
        <p
          style={{
            color: white,
            fontSize: "1.8rem",
            textAlign: "center",
            margin: 0,
          }}
        >
          🥈 2nd place - USDC
          <img
            src="/usdc.png"
            width={36}
            height={36}
            alt=""
            style={{ marginRight: ".2rem", marginLeft: "1rem" }}
          />
          200
        </p>
        <p
          style={{
            color: white,
            fontSize: "1.8rem",
            textAlign: "center",
            margin: 0,
          }}
        >
          🥉 3nd place - USDC
          <img
            src="/usdc.png"
            width={36}
            height={36}
            alt=""
            style={{ marginRight: ".2rem", marginLeft: "1rem" }}
          />
          100
        </p>

        <p style={{ color: white, fontSize: "1.8rem", textAlign: "center" }}>
          4th to 10th place - USDC $8.99 (to mint a Beam Name)
        </p>
        <p style={{ color: white, fontSize: "1.8rem", textAlign: "center" }}>
          All other participants - 10 Warps
        </p>
      </div>
    ),
    intents: [<Button action="/continue">Continue</Button>],
  });
});

app.frame("/continue", (c) => {
  return c.res({
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
        <p style={{ fontSize: "4rem", color: primaryColor }}>Thank you</p>

        <p
          style={{
            color: white,
            fontSize: "1.8rem",
            textAlign: "center",
            width: "90%",
          }}
        >
          Your NFT will be dropped at the end of the competition. Look for
          updates and follow our channel to be eligible to win the prize.
        </p>
        <p
          style={{
            alignText: "center",
            color: white,
            fontSize: 30,
          }}
        >
          You can follow your position on the leaderboard.
        </p>
        <p
          style={{
            alignText: "center",
            color: white,
            fontSize: 30,
          }}
        >
          Good luck!
        </p>
      </div>
    ),
    intents: [
      <Button.Link href="https://framemadness.vercel.app">
        Leaderboard
      </Button.Link>,
    ],
  });
});

function roundTest(matchNum: number, i?: string): JSX.Element | string {
  if (matchNum <= 8) {
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
        <p
          style={{
            fontSize: "3.5rem",
            color: regionColor.east,
            margin: 0,
          }}
        >
          East Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>First round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.east}`
    );
  } else if (matchNum <= 16) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.west, margin: 0 }}>
          West Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>First round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.west}`
    );
  } else if (matchNum <= 24) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.south, margin: 0 }}>
          South Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>First round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.south}`
    );
  } else if (matchNum <= 32) {
    if (i === "progress") {
      return regionColor.midwest;
    }
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
        <p
          style={{ fontSize: "3.5rem", color: regionColor.midwest, margin: 0 }}
        >
          Midwest Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>First round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>{" "}
      </div>
    ) : (
      `4px solid ${regionColor.midwest}`
    );
  } else if (matchNum <= 36) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.east, margin: 0 }}>
          East Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Second round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.east}`
    );
  } else if (matchNum <= 40) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.west, margin: 0 }}>
          West Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Second round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.west}`
    );
  } else if (matchNum <= 44) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.south, margin: 0 }}>
          South Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Second round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.south}`
    );
  } else if (matchNum <= 48) {
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
        <p
          style={{ fontSize: "3.5rem", color: regionColor.midwest, margin: 0 }}
        >
          Midwest Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Second round</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>{" "}
      </div>
    ) : (
      `4px solid ${regionColor.midwest}`
    );
  } else if (matchNum <= 50) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.east, margin: 0 }}>
          East Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Sweet 16 </p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.east}`
    );
  } else if (matchNum <= 52) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.west, margin: 0 }}>
          West Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Sweet 16</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.west}`
    );
  } else if (matchNum <= 54) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.south, margin: 0 }}>
          South Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Sweet 16</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>{" "}
      </div>
    ) : (
      `4px solid ${regionColor.south}`
    );
  } else if (matchNum <= 56) {
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
        <p
          style={{ fontSize: "3.5rem", color: regionColor.midwest, margin: 0 }}
        >
          Midwest Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Sweet 16</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>{" "}
      </div>
    ) : (
      `4px solid ${regionColor.midwest}`
    );
  } else if (matchNum === 57) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.east, margin: 0 }}>
          East Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Elite Eight</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.east}`
    );
  } else if (matchNum === 58) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.west, margin: 0 }}>
          West Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Elite Eight</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.west}`
    );
  } else if (matchNum === 59) {
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
        <p style={{ fontSize: "3.5rem", color: regionColor.south, margin: 0 }}>
          South Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Elite Eight</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.south}`
    );
  } else if (matchNum === 60) {
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
        <p
          style={{ fontSize: "3.5rem", color: regionColor.midwest, margin: 0 }}
        >
          Midwest Region
        </p>
        <p style={{ color: white, marginTop: ".5rem" }}>Elite Eight</p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.midwest}`
    );
  } else if (matchNum === 61 || matchNum === 62) {
    if (i === "progress") {
      return regionColor.final_four;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${regionColor.final}`
    );
  } else if (matchNum === 62) {
    if (i === "progress") {
      return regionColor.final_four;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.final_four }}>
          Final Four
        </p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${primaryColor}`
    );
  } else if (matchNum === 63) {
    if (i === "progress") {
      return regionColor.final;
    }
    return i ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "3.5rem", color: regionColor.final }}>
          Championship
        </p>
        <p
          style={{
            color: white,
            alignSelf: "center",
            fontSize: "2rem",
            transform: "translateY(-200%)",
            marginTop: "3rem",
          }}
        >
          Match {matchNum} of 63
        </p>
      </div>
    ) : (
      `4px solid ${primaryColor}`
    );
  } else {
    return ""; // Retour par défaut pour tout numéro de match non géré
  }
}

export const GET = handle(app);
export const POST = handle(app);
