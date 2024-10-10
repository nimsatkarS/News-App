import React, { Component } from "react";

export class NewsItem extends Component {
   articles= [
    {
      source: {
        id: "news24",
        name: "News24"
      },
      author: "Nicolette Lategan",
      title: "Proteas captain Bavuma ruled out of third ODI against Ireland, Hendricks called up",
      description: "Proteas ODI captain Temba Bavuma has been ruled out of the third ODI against Ireland due to a soft tissue injury to his left elbow, Cricket South Africa announced on Sunday.",
      url: "https://www.news24.com/sport/cricket/proteas/proteas-captain-bavuma-ruled-out-of-third-odi-against-ireland-hendricks-called-up-20241006",
     urlToImage: "https://cdn.24.co.za/files/Cms/General/d/12082/060f973965f04b41a0fe7d5bfa209cde.jpg",
     publishedAt: "2024-10-06T12:02:58",
      content: "Proteas ODI captain Temba Bavuma has been ruled out of the third ODI against Ireland due to a soft tissue injury to his left elbow, Cricket South Africa announced on Sunday."
    },
    {
      source: {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      title: "India vs Pakistan LIVE: Women’s T20 World Cup – cricket score, radio commentary, video highlights and text updates",
      description: "India face Pakistan in the Women’s T20 World Cup at Dubai International Stadium, Dubai – follow text updates, radio commentary and video highlights.",
      url: "http://www.bbc.co.uk/sport/cricket/live/cpv3p2ve0pvt",
     urlToImage: "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
     publishedAt: "2024-10-06T10:22:19.4500248Z",
      content: "India v Pakistan (11:00 BST)\r\nIndia: Smriti Mandhana, Harmanpreet Kaur (c), Captain\r\nJemimah, Rodrigues\r\nRicha Ghosh (wk), Deepti Sharma, Sajeevan Sajana, Arundhati Reddy, Shreyanka Patil, Asha Sobha… [+503 chars]"
    },
    {
      source: {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      title: "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description: "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
     urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
     publishedAt: "2020-04-27T11:41:47Z",
      content: "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      source: {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      title: "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description: "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
     urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
     publishedAt: "2020-03-30T15:26:05Z",
      content: "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
  ];
  constructor() {
    super();
    // console.log("Hello we are creating the react News app");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    let {title, description, imgUrl,newsUrl} =this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
