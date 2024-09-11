import "../styles/footer.css"
import { foot } from "../data/foot"

const Footer = () => {
  return (
    <div className="footer">
      {foot.map((fint) => {
        return (
            <div className="footer-box">
                <a href="#">{fint.tell}</a>
                <h1>{fint.xizmat}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default Footer
