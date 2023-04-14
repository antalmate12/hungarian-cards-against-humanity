import styles from "@/styles/Hero.module.scss";

const Hero = () => {
  const myVariable = process.env.MY_VARIABLE;

  const logToken = () => {
    console.log(process.env.GITHUB_TOKEN);
    console.log(myVariable);
  };

  return (
    <div className="container">
      <h1>Hero</h1>
      <button onClick={logToken}>log token</button>
    </div>
  );
};

export default Hero;
