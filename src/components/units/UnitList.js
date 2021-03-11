import { Col, Row } from "react-materialize";
import Container from "react-materialize/lib/Container";
import React, { Component } from "react";
import axios from "axios";
import UnitItem from "./UnitItem";
import Preloading from "../units/Preloading";
import ListingUnits from './ListingUnits'

export default class UnitList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentPage: 1,
      todosPerPage: 5,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 3,
      loading: true,
      error: false,
      sort: ""
    };
    this.onChange = this.onChange.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }

    componentWillMount() {

        axios
        .get('http://localhost:5000/api/units')
        .then(res => {
          console.log(res.data.data)
          this.setState({
            todos: res.data.data,
            loading:false,
            // error:true
          });
        })
      }

  
  
  onChange(e) {
    this.setState({ sort: e.target.value });
    console.log("here")
  switch(e.target.value){
    case 'priceHigh': this.setState((state)=>{todos:state.todos.sort((a,b) => b.price-a.price)}); break;
    case 'priceLow': this.setState((state)=>{todos:state.todos.sort((a,b) => a.price-b.price)}); break;
    case 'areaHigh': this.setState((state)=>{todos:state.todos.sort((a,b) => b.area-a.area)}); break;
    case 'areaLow': this.setState((state)=>{todos:state.todos.sort((a,b) => a.area-b.area)}); break;
    default: this.setState((state)=>{todos:state.todos.sort((a,b) => b.price-a.price)}); break;

  }
   
  }

  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.state.todos.length / this.state.todosPerPage
    );
    this.setState({ isNextBtnActive: "disabled" });
    this.setState({ isPrevBtnActive: "disabled" });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });

    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }

  render() {
    const {
      todos,
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive
    } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    let renderTodos = todos.map(todo => <UnitItem info={todo} key={todo._id} />);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li
            key={number}
            className="active"
            id={number}
            onClick={this.handleClick}
          >
            {" "}
            {number}
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li
            key={number}
            className={number === currentPage ? "active waves-effect" : ""}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      } else {
        return console.log("current page : " + currentPage);
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="" onClick={this.btnIncrementClick}>
          {" "}
          &hellip;{" "}
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="" onClick={this.btnDecrementClick}>
          {" "}
          &hellip;
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <span id="btnPrev">
            <i className="fas fa-chevron-left" />{" "}
          </span>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li
          className={isPrevBtnActive}
          onClick={this.btnPrevClick}
          id="btnPrev"
        >
          {" "}
          <i className="fas fa-chevron-left" />{" "}
        </li>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <span id="btnNext">
            {" "}
            <i className="fas fa-chevron-right" />{" "}
          </span>
        </li>
      );
    } else {
      renderNextBtn = (
        <li
          className={isNextBtnActive}
          id="btnNext"
          onClick={this.btnNextClick}
        >
          {" "}
          <i className="fas fa-chevron-right" />{" "}
        </li>
      );
    }

    if (this.state.error)
      return <h3> Error while getting units or no units</h3>;
    return this.state.loading ? (
      <div className="card-loading">
        <Preloading />
      </div>
    ) : (
      <div>
        <div className="sortby">
          <Container>
            <Row>
              <Col l={3} m={12} className="right">
                <select
                  className="browser-default"
                  value={this.state.sort}
                  onChange={this.onChange}
                  name="sort"
                >
                  <option value="" disabled>
                    Sort By
                  </option>
                  <option value="priceHigh" defaultValue onClick={this.onChange}>
                    PRICE (High-Low)
                  </option>
                  <option value="priceLow" onClick={this.onChange}>  PRICE (Low-High)</option>
                  <option value="areaHigh" onClick={this.onChange}>  AREA (High-Low)</option>
                  <option value="areaLow">AREA (Low-High)</option>

                </select>
                {console.log(this.state.sort)}
              </Col>
            </Row>
          </Container>
        </div>

        <ul>{renderTodos}</ul>
        <ul className="pagination">
          {renderPrevBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderNextBtn}
        </ul>

<ListingUnits/>

      </div>
    );
  }
}
