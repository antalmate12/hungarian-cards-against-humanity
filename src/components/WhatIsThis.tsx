const WhatIsThis = () => {
  const helloDemo = () => {
    // Call the "hello" edge function
    fetch("/api/create-github-issue").then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="container">
      <p>Ahogy azt a játék eredeti készítői írják:</p>

      <p>
        Az Emberiség Ellenes Kártyák egy partijáték borzalmas embereknek.
        Szemben minden más partijátékkal amit valaha játszottál, az Emberiség
        Ellenes Kártyák pontosan annyira aljas és kínos mint te és a barátaid.
      </p>

      <p>
        A játék egyszerű. Minden körben egy játékos feltesz egy kérdést egy
        fekete kártyáról, a többiek pedig a legviccesebb fehér kártyáikkal
        válaszolnak.
      </p>

      <button onClick={helloDemo}>asd</button>
    </div>
  );
};

export default WhatIsThis;
