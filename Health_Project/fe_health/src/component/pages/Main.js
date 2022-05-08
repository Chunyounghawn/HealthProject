import main_fisrt from "../../video/main_fisrt.mp4"

function MainSection() {
  return (
    <div className="section">
      <h3>Ready to begin you health?</h3>
      <p class="message">click on the button now</p>
      <video id="myVideo" loop muted data-autoplay>
        <source src={main_fisrt} type="video/mp4" />
      </video>

    </div>
  )
}

export default MainSection