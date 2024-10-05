import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";

function Projects() {
  const top_cards = [
    {
      key: 1,
      image: "/video.jpg",
      proj_link:
        "https://github.com/justingill/Resume-Portfolio/tree/master/Anonymous%20Company%20Video%20Project",
      project_title:
        "Anonymous Company Video Analysis, PowerPoint & Tableau Visualization",
      project_description:
        "This project is concerned with analyzing the features and view counts of 100 videos from an anonymous company. Using different statistical tools, we can categorize the videos into being: hot, stable or part of everything else. The insight gained from classifying the videos will hypothetically be used to inform the rest of the company on video placement among the website to optimize viewer interactions. The data is then prepared in Tableau and outputted to a PowerPoint for a presentation that can be given to the company.",
      libraries: "Pandas, Numpy, Seaborn, Matplotlib, xlrd",
      event_label: "Annonymous Project",
    },
    {
      key: 2,
      image: "/soccer.jpg",
      proj_link:
        "https://github.com/justingill/Resume-Portfolio/tree/master/USL%20Scraper%20Project",
      project_title:
        "United Soccer League Web Scraper, Analysis & Tableau Dashboard",
      project_description:
        "This project is concerned with collecting all individual player data in the United Soccer League by scraping the USL website. This data is then used to make statistical comparisons between Reno 1868 and their next opponent using Plotly and Tableau to create visual charts and a dashboard on a weekly basis to track the current soccer season.",
      libraries:
        "Pandas, Numpy, Seaborn, Matplotlib, Sqlite, Selenium, Scikit-learn, Plotly",
      event_label: "USL Scraper",
    },
    {
      key: 3,
      image: "/reno.jpeg",
      proj_link:
        "https://github.com/justingill/Resume-Portfolio/tree/master/Washoe%20Sales%20Report%20Project",
      project_title: "2017 Washoe Sales Report Analysis & Prediction",
      project_description:
        "This is an in-depth analysis of residential homes in Washoe County using the 2017 Washoe County Sales Report from the Washoe County website. We will use a subset of the Sales Report to look at residential housing and determine housing sales, prices, locality, space, and other insightful information. This project also uses sklearn to create a linear regression model that predicts housing prices for Washoe County.",
      libraries: "Pandas, Numpy, Seaborn, Matplotlib, Scikit-learn, xlrd",
      event_label: "Washoe Sales Report",
    },
  ];
  const bottom_cards = [
    {
      key: 4,
      image: "/fitness.png",
      proj_link:
        "https://github.com/justingill/Resume-Portfolio/tree/master/Fitness%20Web%20Application%20Project",
      project_title: "Fitness Web Application with Flask",
      project_description:
        "This project is a web application designed to help users track their fitness goals and progress using Flask. Users can log their workouts, set goals, and view progress reports. The application provides a user-friendly interface and integrates with a database to store user data securely.",
      libraries: "Flask, SQLAlchemy, Jinja2, Bootstrap",
      event_label: "Fitness Web Application",
    },
    {
      key: 5,
      image: "/nba.jpg",
      proj_link:
        "https://github.com/justingill/Resume-Portfolio/tree/master/NBA%20Analysis%20Project",
      project_title: "16-17' NBA Analysis",
      project_description:
        "This is an exploratory data analysis project used to examine the 2016-17 NBA season using the NBA player stats dataset from Kaggle.com. By using libraries like Seaborn, Pandas, and Numpy, we can look at detailed information about players, leaderboards of the 2017 season, and observe trends from previous seasons compared to the 16-17' season, giving important information on player's performance.",
      libraries: "Pandas, Numpy, Seaborn, Matplotlib",
      event_label: "NBA Analysis",
    },
    {
      key: 6,
      image: "/bike.jpg",
      proj_link:
        "https://github.com/justingill/Resume-Portfolio/tree/master/City%20Cycle%20Consumption%20Project",
      project_title: "City Cycle Consumption Prediction",
      project_description:
        "This is a problem drawn from the UCI machine learning repository. We are given features such as car displacement, weight, car name, etc., and are tasked with creating a regression model to predict miles per gallon fuel consumption of a specific car.",
      libraries: " Pandas, Numpy, Seaborn, Matplotlib, Scikit-learn",
      event_label: "City-Cycle Project",
    },
  ];
  return (
    <Container fluid className="text-center" id="bottom-div-projects">
      <Container id="project-container" />
      <Container id="project-title">Projects</Container>
      <Row>
        {top_cards.map((card) => (
          <ProjectCard
            key={card.key}
            image={card.image}
            proj_link={card.proj_link}
            project_title={card.project_title}
            project_description={card.project_description}
            libraries={card.libraries}
          />
        ))}
      </Row>
      <Row>
        {bottom_cards.map((card) => (
          <ProjectCard
            key={card.key}
            image={card.image}
            proj_link={card.proj_link}
            project_title={card.project_title}
            project_description={card.project_description}
            libraries={card.libraries}
            event_label={card.event_label}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
