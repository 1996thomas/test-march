import { Button, Frog } from "frog";
import { pinata } from "frog/hubs";
import { handle } from "frog/vercel";
const teamsData = {
  "1": {
    logo: "/east/01_uconn.png",
    name: "Connecticut Huskies",
  },
  "2": {
    logo: "/east/02_stetson.png",
    name: "Stetson Hatters",
  },
  "3": {
    logo: "/east/03_fla-atlantic.png",
    name: "Florida Atlantic Owls",
  },
  "4": {
    logo: "/east/04_northwestern.png",
    name: "Northwestern Wildcats",
  },
  "5": {
    logo: "/east/05_san-diego-st.png",
    name: "San Diego State Aztecs",
  },
  "6": {
    logo: "/east/06_uab.png",
    name: "UAB Blazers",
  },
  "7": {
    logo: "/east/07_auburn.png",
    name: "Auburn Tigers",
  },
  "8": {
    logo: "/east/08_yale.png",
    name: "Yale Bulldogs",
  },
  "9": {
    logo: "/east/09_byu.png",
    name: "Brigham Young Cougars",
  },
  "10": {
    logo: "/east/10_duquesne.png",
    name: "Duquesne Dukes",
  },
  "11": {
    logo: "/east/11_illinois.png",
    name: "Illinois Fighting Illini",
  },

  "12": {
    logo: "/east/12_morehead-st.png",
    name: "Morehead State Eagles",
  },
  "13": {
    logo: "/east/13_washington-st.png",
    name: "Washington State Cougars",
  },
  "14": {
    logo: "/east/14_drake.png",
    name: "Drake Bulldogs",
  },
  "15": {
    logo: "/east/15_iowa-st.png",
    name: "Iowa State Cyclones",
  },
  "16": {
    logo: "/east/16_south-dakota-st.png",
    name: "South Dakota State Jackrabbits",
  },
  "17": {
    logo: "/west/01_north-carolina.png",
    name: "North Carolina Tar Heels",
  },
  "18": {
    logo: "/west/02_west_howard_wagner.png",
    name: " Howard/Wagner",
  },
  "19": {
    logo: "/west/03_mississippi-st.png",
    name: "Mississippi State Bulldogs",
  },
  "20": {
    logo: "/west/04_michigan-st.png",
    name: "Michigan State Spartans",
  },
  "21": {
    logo: "/west/05_st-marys-ca.png",
    name: "Saint Mary's Gaels",
  },
  "22": {
    logo: "/west/06_grand-canyon.png",
    name: "Grand Canyon Antelopes",
  },
  "23": {
    logo: "/west/07_alabama.png",
    name: "Alabama Crimson Tide",
  },
  "24": {
    logo: "/west/08_col-of-charleston.png",
    name: "Charleston Cougars",
  },
  "25": {
    logo: "/west/09_clemson.png",
    name: "Clemson Tigers",
  },
  "26": {
    logo: "/west/10_new-mexico.png",
    name: "New Mexico Lobos",
  },
  "27": {
    logo: "/west/11_baylor.png",
    name: "Baylor Bears",
  },
  "28": {
    logo: "/west/12_colgate.png",
    name: "Colgate Raiders",
  },
  "29": {
    logo: "/west/13_dayton.png",
    name: "Dayton Flyers",
  },
  "30": {
    logo: "/west/14_nevada.png",
    name: "Nevada Wolf Pack",
  },
  "31": {
    logo: "/west/15_arizona.png",
    name: "Arizona Wildcats",
  },
  "32": {
    logo: "/west/16_long-beach-st.png",
    name: "Long Beach State 49ers",
  },
  "33": {
    logo: "/south/01_houston.png",
    name: "Houston Cougars",
  },
  "34": {
    logo: "/south/02_longwood.png",
    name: "Longwood Lancers",
  },
  "35": {
    logo: "/south/03_nebraska.png",
    name: "Nebraska Cornhuskers",
  },
  "36": {
    logo: "/south/04_texas-am.png",
    name: "Texas A&M Aggies",
  },
  "37": {
    logo: "/south/05_wisconsin.png",
    name: "Wisconsin Badgers",
  },
  "38": {
    logo: "/south/06_james-madison.png",
    name: "James Madison Dukes",
  },
  "39": {
    logo: "/south/07_duke.png",
    name: "Duke Blue Devils",
  },
  "40": {
    logo: "/south/08_vermont.png",
    name: "Vermont Catamounts",
  },
  "41": {
    logo: "/south/09_texas-tech.png",
    name: "Texas Tech Red Raiders",
  },
  "42": {
    logo: "/south/10_north-carolina-st.png",
    name: "North Carolina State Wolfpack",
  },
  "43": {
    logo: "/south/11_kentucky.png",
    name: "Kentucky Wildcats",
  },
  "44": {
    logo: "/south/12_oakland.png",
    name: "Oakland Golden Grizzlies",
  },
  "45": {
    logo: "/south/13_florida.png",
    name: "Florida Gators",
  },
  "46": {
    logo: "/south/14_south_colorado_boise-st.png",
    name: "Colorado/Boise St",
  },
  "47": {
    logo: "/south/15_marquette.png",
    name: "Marquette Golden Eagles",
  },
  "48": {
    logo: "/south/16_western-ky.png",
    name: "Western Kentucky Hilltoppers",
  },
  "49": {
    logo: "/midwest/01_purdue.png",
    name: "Purdue Boilermakers",
  },
  "50": {
    logo: "/midwest/02_midewest_grambling_montana-st.png",
    name: "Grambling/Montana St",
  },
  "51": {
    logo: "/midwest/03_utah-st.png",
    name: "Utah State Aggies",
  },
  "52": {
    logo: "/midwest/04_tcu.png",
    name: "TCU Horned Frogs",
  },
  "53": {
    logo: "/midwest/05_gonzaga.png",
    name: "Gonzaga Bulldogs",
  },
  "54": {
    logo: "/midwest/06_mcneese.png",
    name: "Mcneese State Cowboys",
  },
  "55": {
    logo: "/midwest/07_kansas.png",
    name: "Kansas Jayhawks",
  },
  "56": {
    logo: "/midwest/08_samford.png",
    name: "Samford Bulldogs",
  },
  "57": {
    logo: "/midwest/09_south-carolina.png",
    name: "South Carolina Gamecocks",
  },
  "58": {
    logo: "/midwest/10_oregon.png",
    name: "Oregon Ducks",
  },
  "59": {
    logo: "/midwest/11_creighton.png",
    name: "Creighton Bluejays",
  },
  "60": {
    logo: "/midwest/12_akron.png",
    name: "Akron Zips",
  },
  "61": {
    logo: "/midwest/13_texas.png",
    name: "Texas Longhorns",
  },
  "62": {
    logo: "/midwest/14_midwest_colorado-st_virginia.png",
    name: "Colorodo St/Virginia",
  },
  "63": {
    logo: "/midwest/15_tennessee.png",
    name: "Tennessee Volunteers",
  },
  "64": {
    logo: "/midwest/16_st-peters.png",
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
          March madness has started, submission are closed
        </p>
      </div>
    ),
    intents: [
      <Button action="/tournament">Enter the contest</Button>,
      <Button.Link href="https://framemadness.vercel.app">
        Leaderboard
      </Button.Link>,
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
          paddingLeft: "3rem",
          height: "100%",
          backgroundColor: "black",
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

app.frame("/finish", async (c) => {
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
            alignText: "center",
            color: regionColor.midwest,
            fontSize: "2rem",
          }}
        >
          March madness has started, submission are closed
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
          800{" "}
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
          400
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
          200
        </p>

        <p
          style={{
            color: white,
            fontSize: "1.8rem",
            textAlign: "center",
          }}
        >
          4th to 10th place - USDC
          <img
            src="/usdc.png"
            width={36}
            height={36}
            alt=""
            style={{ marginRight: ".2rem", marginLeft: "1rem" }}
          />
          8.99 (to mint a Beam Name)
        </p>
        <p
          style={{
            color: white,
            fontSize: "1.8rem",
            textAlign: "center",
          }}
        >
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
            textAlign: "center",
          }}
        >
          You can follow your position on the leaderboard that we will share
          later on our channel.
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
      <Button.Link href="https://warpcast.com/~/channel/framemadness">
        Follow us
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
