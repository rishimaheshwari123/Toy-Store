import aboutimg from './toy img/about page.png';

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='about-sec'>
                    <div className='about-con'>
                        <h1>OUR STORY</h1>
                        <br></br><br></br>
                        <p>
                            Welcome to The Toy Shop, a treasure trove of children’s toys, games, and gifts.
                            With 16 years experience in the toy trade, we decided to take the plunge and open our first shop on the 1st of June 2017.
                            Our aim was to create a magical space for kids (and kids at heart), where they could touch, feel, play and interact with the toys they see. To create an experience, not just a shopping trip. To supply our valued customer with toys of the highest quality and value for money.
                            Our range of toys has been sourced from my own experience as a mother of 3 children and an Aunty of 20 nieces and nephews. From beautiful wooden toys, scooters, art and craft sets, games, puzzles, books, dress up sets, STEM toys we want to feed the children’s imagination and encourage learning through play.
                            We also stock a lovely range of baby and christening gifts, the softest 100% Cotton blankets, essential bandanna bibs, beautiful wooden music boxes and lots more.
                        </p>
                    </div>
                    <div className='about-img'>
                        <img src={aboutimg}></img>
                    </div>
                </div>

                <div className='mission'>

                </div>
            </div>
        </>
    );
}
export default About;