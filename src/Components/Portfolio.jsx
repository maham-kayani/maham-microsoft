/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AI Based Human Emotion Recognized System",
    description:
      "AI Based Human Emotion Recognition System is my impactful final year project,is my impactful final year project. Through collaboration with innovative minds Moheed, Rabab, and the pioneering Punjab Safe Cities Authority (PSCA), we've developed a Python-based system",
    url: "https://www.facebook.com/SuperiorUniversityOfficial/photos/a.163791823929/10159456035933930/",
  },
  {
    title: "Queuing_System_Simulator",
    description:
      "This semester project involves creating a C++ simulation program for modeling queuing systems using M/M/1 and M/M/1/k queueing models. It simulates message flow among clients, gateways, and servers, calculating performance metrics like average waiting and system times, and exports results to a CSV file. However, it has limitations like assuming exponential distributions for arrival and service times, ignoring complex scheduling and external factors, and lacking real-time visualization or interactivity. Careful consideration of these limitations is essential for matching the simulator to specific queuing system scenarios.",
    url: "https://github.com/moheed-ali/Queuing-System-Simulator",
  },
  {
    title: "Filesystem project",
    description:
      "In my Operating System and Computer Architecture semester project, I've developed a File System Operations Simulator. The main file's code enables users to perform essential file system tasks like creating, renaming, deleting files, and managing the FAT table. The user-friendly interface presents a list of options, including directory entry printing and FAT table visualization, enhancing comprehension of these crucial concepts.",
    url: "https://www.linkedin.com/in/maham-fatima-kayani/details/projects/",
  },
  {
    title: "Travel Pakage Hub",
    description:
      "This project creates a comprehensive travel management database with tables storing essential data about administrators, customers, passports, countries, visas, travel packages, hotels, and more. It leverages SQL CRUD operations (Create, Read, Update, Delete) for efficient management of travel-related details, including visas, package types, and costs. SQL JOIN operations are crucial for connecting and retrieving interconnected data, enhancing the database's effectiveness in facilitating travel management processes",
    url: "https://github.com/maham-kayani/Travel-Pakage-Hub",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
