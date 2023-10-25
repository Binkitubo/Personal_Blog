import '../../app/globals.css';

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <img src="face.png" className="card-img" />
          </div>
          <div className="card-body">
            <h3 className="card-local">Woman and Flowers</h3>
            <h2 className="card-titulo">Inspired 💜</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="vangogh.jpg" className="card-img" />
          </div>
          <div className="card-body">
            <h3 className="card-local">Night Stars in a Jar</h3>
            <h2 className="card-titulo">
              For my part I know nothing with any certainty, but the sight of
              the stars makes me dream” - Vincent Van Gogh
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="beach.png" className="card-img" />
          </div>
          <div className="card-body">
            <h3 className="card-local">By the Lake</h3>
            <h2 className="card-titulo">New to the gouache game 💙</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="woman.jpg" className="card-img" />
          </div>
          <div className="card-body">
            <h3 className="card-local">Magic Girl</h3>
            <h2 className="card-titulo">Inspired 💕</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
