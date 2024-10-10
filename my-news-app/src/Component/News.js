import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("CMD");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a8dcf79f4f59412497f1a784e1e8b925&page=1&pageSize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrev = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a8dcf79f4f59412497f1a784e1e8b925&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNext = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a8dcf79f4f59412497f1a784e1e8b925&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
            
  render() {
    return (
      <div className="container" my="4">
        <h1 className="text-center">News 24/7. Top HeadLines</h1>
        <div className="row">
         
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })} 
        </div>
        <div className="container d-flex justify-content-between" my="4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrev}>
            &larr; Previous
          </button>
          <button type="button" class="btn btn-dark" onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
