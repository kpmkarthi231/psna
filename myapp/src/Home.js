import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewPage from "./NewPage";

const Home = () => {
  const [deals, setDeals] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://psna-13ca5-default-rtdb.firebaseio.com/Deals.json"
      );
      setDeals(response.data);
      setIsLoad(false);
    } catch (error) {
      console.log(error);
      setIsLoad(false);
    }
  };

  const handleLike = (id) => {
    // Implement like functionality here
    console.log("Liked post with ID:", id);
  };

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={styles.container}>
      {isLoad ? (
        <div style={styles.loading}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <div style={styles.sliderContainer}>
            <Slider {...settings}>
              {deals.map((deal, index) => (
                <div key={index}>
                  <img src={deal.img} alt={"deal"} style={styles.sliderImage} />
                </div>
              ))}
            </Slider>
          </div>
          <div style={styles.postsContainer}>
            <h2 style={styles.postsHeading}>Posts</h2>
            {deals.map((deal, index) => (
              <div key={index} style={styles.postItem}>
                <div style={styles.postHeader}>
                  <img
                    src={deal.profileImage}
                    alt="profile"
                    style={styles.profileImage}
                  />
                  <div>
                    <p style={styles.posterName}>{deal.posterName}</p>
                    <p>{deal.location}</p>
                  </div>
                </div>
                <img src={deal.img} alt="post" style={styles.postImage} />
                <div style={styles.actionButtons}>
                  <button
                    onClick={() => handleLike(deal.id)}
                    style={styles.likeButton}
                  >
                    Like
                  </button>
                  <button
                    onClick={() => console.log("comments")}
                    style={styles.commentButton}
                  >
                    Comments
                  </button>
                  <button onClick={() => console.log("share")}>Share</button>
                </div>
                {deal.subtitle && (
                  <p style={styles.subtitle}>{deal.subtitle}</p>
                )}
                {deal.imageDescription && (
                  <p style={styles.imageDescription}>{deal.imageDescription}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <NewPage /> */}
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
  },
  loading: {
    textAlign: "center",
    marginTop: "50px",
  },
  sliderContainer: {
    marginBottom: "10px",
  },
  sliderImage: {
    width: "400px",
    height: "400px",
    margin: "0 auto",
  },
  postsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  postsHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  postItem: {
    marginBottom: "20px",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    width: "80%",
  },
  postHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  posterName: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  postImage: {
    width: "100%",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  actionButtons: {
    display: "flex",
    marginBottom: "10px",
  },
  likeButton: {
    marginRight: "10px",
    color: "black",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  commentButton: {
    marginRight: "10px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  subtitle: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  imageDescription: {
    fontSize: "15px",
    color: "grey",
  },
};

export default Home;
