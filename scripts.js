/* styles.css */
body {
    font-family: 'Arial', sans-serif;
    background: #333;
    color: #fff;
}

header {
    background: #6C704D;
    color: #fff;
    padding: 2rem 0;
}

header .logo {
    max-width: 150px;
}

header h1 {
    margin: 0.5rem 0;
}

header p.lead {
    font-size: 1.25rem;
    color: #8E7348;
}

.competencies {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.competency {
    background: #8E7348;
    color: #fff;
    padding: 2rem;
    margin: 1rem 0;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.competency h3 {
    color: #333;
    font-weight: bold;
    margin-bottom: 1rem;
}

.bubble-description {
    background: #D3C89F;
    color: #333;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 0.5rem;
}

.instagram-posts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.post {
    background: #8E7348;
    color: #fff;
    margin: 1rem;
    border-radius: 10px;
    text-align: center;
    width: 30%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post img {
    max-width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.post p {
    padding: 1rem;
    background: #D3C89F;
    color: #333;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: 0;
}

footer {
    background: #6C704D;
    color: #fff;
    padding: 1rem 0;
}

footer a {
    color: #8E7348;
    text-decoration: none;
}

.install-banner {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #8E7348;
    color: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 1000;
}

.hidden {
    display: none;
}

button#installButton {
    background: #D3C89F;
    color: #333;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

button#installButton:hover {
    background: #fff;
}
