import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Cases, { NextvelCaseProps } from "./Cases";

export default {
  title: "Components/Tabs",
  component: Cases,
} as Meta;

const Template: Story<NextvelCaseProps> = (args) => <Cases {...args} />;

const testData = {
  header: "Cases",
  subHeader: "That we handle",
  subHeaderIcon: {
    altText: "",
    sourceUrl:
      "https://wordpress-321502-2422076.cloudwaysapps.com/wp-content/uploads/2022/03/icon-bag.png",
  },
  cases: [
    {
      caseTitle: "Car Accidents",
      caseSubtitle: "CAR ACCIDENT ATTORNEYS PHILADELPHIA & NEW JERSEY",
      caseContent:
        "<p>Our Philadelphia auto accident attorney team is prepared to do whatever it takes to help you get fair compensation after an auto accident. Being in a car accident is an unexpected event that can throw your life into disarray especially if you are suffering from an injury due to another person’s mistake. When you’re hurt in a car accident, you need an aggressive legal team that tediously pours over the details until you get the compensation that you need and deserve.</p>\n",
      caseIcon: {
        altText: "",
        sourceUrl:
          "https://wordpress-321502-2422076.cloudwaysapps.com/wp-content/uploads/2022/03/icon-car.png",
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained",
              placeholder: {
                fallback:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAABa0lEQVQ4y+2Uu0oEUQyGZ2e8lLKdVoL4BJYKvsRWunZaeUNQxJUF74IIWmnjG4irlbBgZy3Y2Qj2WqtY/Z9EMsNwPCv2GgiTSXL++ZOcTJL8y28FKFRSJbe/BQELZkDqWrbTIDfxePEeAwt9xiD0pYF/SFJfDpgz6vGkcWAdmAcWgYakWWBBUi1n5GWa1iQdAJMxhsPAFFAHRoAuYBOouj0KLAGDnm8gh+UKEw82gDlJN8AGcALsSZoBWsCqJGM8DRibO+AKOMorK/fwjEAkEZOI/wV4chIDOeC1B2+Bpuu5A7wCH8C7qSR7vnnsEtjyljwCDzYkA9x1QBvEPrAjaQ14/oGtMbOcbW/NsvsnbFq9wIoBeS9tKMfOtA1ceB9bksxuS2p6Tt2BjdQ9MBbeQfviqU+10x3MterDs7K7gf7i2kjKIoe/NkRSGmxKGm5H+Vy4EZknVzqwiq1oVt6y2C4XX/zpxxBrxR+VT1T/S+Gr+ImqAAAAAElFTkSuQmCC",
              },
              images: {
                fallback: {
                  src: "/static/a72dd02018ba4891c965c119bcc3def5/b024c/icon-car.png",
                  srcSet:
                    "/static/a72dd02018ba4891c965c119bcc3def5/fbc98/icon-car.png 16w,\n/static/a72dd02018ba4891c965c119bcc3def5/f9f53/icon-car.png 33w,\n/static/a72dd02018ba4891c965c119bcc3def5/b024c/icon-car.png 65w",
                  sizes: "(min-width: 65px) 65px, 100vw",
                },
                sources: [],
              },
              width: 65,
              height: 65,
            },
          },
        },
      },
      caseImage: {
        altText: "",
        sourceUrl:
          "https://wordpress-321502-2422076.cloudwaysapps.com/wp-content/uploads/2022/01/car-accidents.png",
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained",
              placeholder: {
                fallback:
                  "data:image/png;base64,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",
              },
              images: {
                fallback: {
                  src: "/static/708a288659764cceeb86063c5698c18d/8508f/car-accidents.png",
                  srcSet:
                    "/static/708a288659764cceeb86063c5698c18d/c9352/car-accidents.png 98w,\n/static/708a288659764cceeb86063c5698c18d/e3a2c/car-accidents.png 197w,\n/static/708a288659764cceeb86063c5698c18d/8508f/car-accidents.png 393w",
                  sizes: "(min-width: 393px) 393px, 100vw",
                },
                sources: [],
              },
              width: 400,
              height: 400,
            },
          },
        },
      },
      caseLearnMore: {
        url: "#",
        title: "Learn More",
        target: "",
      },
      caseFreeEvaluation: {
        url: "#",
        title: "Free Evaluation",
        target: "",
      },
    },
    {
      caseTitle: "Slip & Falls",
      caseSubtitle: "SLIP & FALLS ATTORNEY PHILADELPHIA & NEW JERSEY",
      caseContent:
        "<p>Our Philadelphia auto accident attorney team is prepared to do whatever it takes to help you get fair compensation after an auto accident. Being in a car accident is an unexpected event that can throw your life into disarray especially if you are suffering from an injury due to another person’s mistake. When you’re hurt in a car accident, you need an aggressive legal team that tediously pours over the details until you get the compensation that you need and deserve.</p>\n",
      caseIcon: {
        altText: "",
        sourceUrl:
          "https://wordpress-321502-2422076.cloudwaysapps.com/wp-content/uploads/2022/03/icon-slip.png",
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained",
              placeholder: {
                fallback:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAABj0lEQVQ4y5WUzytFURDH333Pjyhl9d5foFhJFrLESrFjIeVvYGEjkVAoKQvZiCwsrFjYSLIlG/YUf4Lk12I+mmcO0+3e2zE13Xunez5nznxnTqkUYUDdRaTuQAVIQlz9X5aCeU+igKlFwcv2bAMmRKQaoLpRLDCx4/1mCRzyY+c+y1iYB3WJSDewa8Bji0cBA6wd2BaRa+DdQGdAH9ASJYrt2mDPTeACuOTPXoDGUNcgVMyRtfh3wLyIvBrsE3gEaj67XFFst6DmCHAK3ChJRD6ASRF5cMByLjCnRaYMpj5nsQNAa9paKEoGTPvsC7gCnoBbJ9aequz/j2lkBbzZe4/VcMdNTC1X5Yzs1g3Q7/rw3hSvd0E6gSxgKPC41WzWLajaBjP23Vx4OVgwjNi+G6smy27YgJ3ugkhyoakRy/IV4BkYBY6ApcIbJ7W4FxgCBoBBHTMRWRCRVeDETYz2aUdMhtPAFrBm4mwAizoxFtNsl3XGgTFbl/z3yLkeYEXAirVFRUTqbrEQ9172iah9A2bxz9W4gToxAAAAAElFTkSuQmCC",
              },
              images: {
                fallback: {
                  src: "/static/6d902d49358d01aee3e5e6d551a6621a/b024c/icon-slip.png",
                  srcSet:
                    "/static/6d902d49358d01aee3e5e6d551a6621a/fbc98/icon-slip.png 16w,\n/static/6d902d49358d01aee3e5e6d551a6621a/f9f53/icon-slip.png 33w,\n/static/6d902d49358d01aee3e5e6d551a6621a/b024c/icon-slip.png 65w",
                  sizes: "(min-width: 65px) 65px, 100vw",
                },
                sources: [],
              },
              width: 65,
              height: 65,
            },
          },
        },
      },
      caseImage: {
        altText: "",
        sourceUrl:
          "https://wordpress-321502-2422076.cloudwaysapps.com/wp-content/uploads/2022/01/slips-and-falls-circle.png",
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained",
              placeholder: {
                fallback:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF9klEQVQ4yx1UfVDT9x3+Qv9a5x+rddtJmQ4kgbxplZegBURdq85zW0s7qZM5KVOqtdWpgyoIFAWiQwIk4SX55f2NYN4gEPMCIZDEiIigQ9R5t7KbTmdfr73eSpLvs0s/d5+7zz1/PPfcc5/nIf6RIeI064lzwJAyGbhBRPU1pOX8ubV1J4829LS3hexm438DXm/CMWBeNqpU/3LZ7aPK3r4jb+/cuqKloZ4YdcbU41UHSe2J46Tx41pCTMq+5KbeuTVLktPZ2nxeVP/Xb09XV0Da1gClRAyrQQuvawhWkwnjXh8m/ONQy+WfNtfX/f6T800EAKk58UHKuTN/IcSslqd6XMNJ8EVdb6evr/0C7Lpe+GzaZZ9VFbeqZVQvl1GTiqE2kz7huHo1NubxxCxGE2RiMerOnLqkkTM/kB7a/w4hr/zkxR+UmRnp2OTIIGYnR7+/FXQnbk6MIuJz0qjfSX0OAzXIZdSsUVE9o6AaeT/MekP8qskUb29txYn3D19g+vqIXqNNJRfPniaSyy3NUlEDFm6Mfz8f9mI+7MPd6DidnbqGh3PXsTgTxJBJiZ52EQa0GmpQMlQm7oRawSR0SlVCrVDg3t2FnYsL9wi5GQllmVXy/4U9dsxOuRP3Z4KYCbjo32+MY2F6AvMRH+7fmsTdaABmVT9MahVGHE64h4Zpb1cX1HJFbHFhEY8f/2c2+m8QMuHztHocFsxNXVsOX7PidshDwx4bon4noj4H5kMeJFXfjY7Bou4HI+mCnmGgZZRwOYbokydPcX/xQfzWzRlEQtd3kakx/0zAZYHfro1HfXY6MsDAazfAb9ch6ncgODqI21NuhL1ObCsuQsPHNaisOIAD5fuwtLREv/r6G/rwwcPY9PUbmAwEJSTodX8bdg/CppFQn01Dwx4rLMpuRMeGMOEawLBRjuefLkDVKwabnYMc7noUb92O2bk7iMXiePr0GX30j3/GQ5MhVB48FCBuqx7uQSX12Q2wqqUYGVDCqpFicmQATn0vjEw3FJIrOFVdhd1bS1Cxaxvm9N2If/UcX3z9DZ49fUY/e/5For6+AYSQO0TWVgdGfIFamE5MjZhpwKnHINMJv00DE9OFTz6ohP9SLR4N9uFztwZfWrvxRH4e8x1ncH9uFtHoND1a/X7i5ZdWYsWPV8wRrVT0ZcRjRcRjS/pHrapuWBQdmHDq0Clqwq4tQhTyOIj0i/DdmBFLmlY87DiJc3uLUFJUjELhZvrTVT+LrVq5Ci+/tNJHon5nKJmM6XFXfMI1QEfMChocNiLoUOPDqj9gVdpaXDr6RzzWtuGJtQfPLZ2YaKoGh8XC6rR0mrY6DZzs7FixMBfCjfzLxKaV1fodekS8tmW/XYshnYy6Tf3QdDSgsvx3KC8thOdcFUKNh3HnymksyRtQW74X/A15KMgroKVFW+jx9/YnDpTtweslhUXkwe3wz8cc+s9NvZdhkokSRmkblFcaaXvdR6g99ieUlRaiqexXCDQdQ7jlI9jPHkHepjxs2VxMi14rwfbSHctv7tmFN7Zu9lcf3EeIoecSUYmbj2olbWA6mpe1EhFN3rKWWtrReIrWHDuEQ2+8hpq9pZBUleHA6yWUlc2lwvxCCAsK43m5Bdj4ai62CIW5wrx8Qu5d9xGV+CLpb29WWRRijJr6Yh6LIj6sk2JIK6VdF8/S8t/upJu4LLqRlUEzM9aBx+XT9YINMT5PgJxsDgQ8wWEBj08EPP4LRC29nHLkz1XEXL+f+AaZvuCwCePO5E9KYn9rPBP78L1342W7t9NcAYemp62Op6elx1hZ7DiblY2sLDZYWexqLodHNq4XpKalZxCi62knZqY7JRyZJjfdejJqUe+XihoenTxcgcp9v8Fbu7ehOP9V8FgZyPzFK2Bn/hJr16xBZsa6STYruyAri00E/PWpPC6P8Hl8Qq6qpcRhkCf7MMUuF6U4jcpkPf6o4q1fv/v2nh26ovwN03kCznf5G7if5Qo4wU18jiRz7ZodO7fvIJkZ60jWOtYLPC6X5GTnkGx2Dvk/0Fq3CL/S0aEAAAAASUVORK5CYII=",
              },
              images: {
                fallback: {
                  src: "/static/c8bc21b84e6b7016742783dd2ba8837e/86f85/slips-and-falls-circle.png",
                  srcSet:
                    "/static/c8bc21b84e6b7016742783dd2ba8837e/12411/slips-and-falls-circle.png 99w,\n/static/c8bc21b84e6b7016742783dd2ba8837e/e3a2c/slips-and-falls-circle.png 197w,\n/static/c8bc21b84e6b7016742783dd2ba8837e/86f85/slips-and-falls-circle.png 394w",
                  sizes: "(min-width: 394px) 394px, 100vw",
                },
                sources: [],
              },
              width: 400,
              height: 398.98477157360406,
            },
          },
        },
      },
      caseLearnMore: {
        url: "#",
        title: "Learn More",
        target: "",
      },
      caseFreeEvaluation: {
        url: "#",
        title: "Free Evaluation",
        target: "",
      },
    },
  ],
};

export const Desktop = Template.bind({});
Desktop.args = {
  mode: "desktop",
  data: testData,
};

export const Mobile = Template.bind({});
Mobile.args = {
  mode: "mobile",
  data: testData,
};
