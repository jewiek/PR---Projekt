import './Container.css';

const Container = () => {
    return(
      <div className="main_box">
          <div className="container_top">
              <div className="film_box">1</div>
              <div className="film_box">2</div>
              <div className="film_box">3</div>
              <div className="film_box">4</div>
              <div className="film_box">5</div>
          </div>
          <div className="container_all">
              <div className="film_box">1</div>
              <div className="film_box">2</div>
              <div className="film_box">3</div>
              <div className="film_box">4</div>
              <div className="film_box">5</div>
          </div>
      </div>
    );
}

export default Container;