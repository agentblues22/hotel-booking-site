import { BsGrid } from "react-icons/bs";
import classes from "./booking.module.css"

function Booking(){

    return(
        <section className ={classes.mainsection}>
        <div className ={classes.form_maincontainer}>
            <div className={classes.heading}>
                <p>
                    Book your rooms today...
                </p>
            </div>
  <form className={classes.form_container} action="/action_page.php">
    <div className={classes.grid_content1}>
    <div>
    <label className={classes.label_text} for="fname">First Name</label>
    </div>
    <input className={classes.input_text} type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
    <div className={classes.grid_content2}>
    <div>
    <label className={classes.label_text} for="lname">Last Name</label>
    </div>
    <input className={classes.input_text} type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
    <div className={classes.grid_content3}>
    <div>
    <label className={classes.label_text} for="country">Room Type</label>
    </div>
    <select className={classes.input_text} id="country" name="country">
      <option value="australia">Single</option>
      <option value="canada">Double</option>
      <option value="usa">DOuble With AC</option>
    </select>
    </div>
    <div className={classes.grid_content4}>
    <div>
    <label className={classes.label_text} for="lname">From</label>
    </div>
    <input className={classes.input_text} type="date" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
    <div className={classes.grid_content5}>
    <div>
    <label className={classes.label_text} for="lname">To</label>
    </div>
    <input className={classes.input_text} type="date" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
    <div className={classes.grid_content6}></div>
    <div className={classes.grid_content7}>
    <input className={classes.input_button} type="submit" value="Book Now"/>
    </div>
  </form>
</div>
        </section>
    );

}
export default Booking;