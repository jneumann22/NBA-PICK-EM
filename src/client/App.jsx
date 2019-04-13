import React from 'react'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           totalPoints: 0,
           team1: 0,
           team2: 0,
           team3: 0,
           team4: 0,
           team1w: 0,
           team2w: 0,
           team3w: 0,
           team4w: 0,
        }
        this.countPoints1 = this.countPoints1.bind(this)
        this.countPoints2 = this.countPoints2.bind(this)
        this.countPoints3 = this.countPoints3.bind(this)
        this.countPoints4 = this.countPoints4.bind(this)
        
    }
   
    countPoints1(e) {
        this.setState({team1 : e.target.value});
    }

     countPoints2(e) {
        this.setState({team2 : e.target.value});
    }

    countPoints3(e) {
        this.setState({team3 : e.target.value});
    }

    countPoints4(e) {
        this.setState({team4 : e.target.value});
    }

 


    render() {
        return (
            <div className = 'holder'>
            
            <div className = 'teamsandwins'>
            <div className = 'teams'>
            <select id = "dropdown1" onChange={this.countPoints1}>
            <option value="1">Select Team</option>
        <option value="1">Warriors</option>
        <option value="2">Nuggets</option>
        <option value="3">Portland</option>
        <option value='4'>Houston</option>
        <option value="5">Jazz</option>
        <option value="6">Thunder</option>
        <option value="7">Spurs</option>
        <option value='8'>Clippers</option>
        <option value="1">Bucks</option>
        <option value="2">Raptors</option>
        <option value="3">Sixers</option>
        <option value='4'>Celtics</option>
        <option value="5">Pacers</option>
        <option value="6">Nets</option>
        <option value="7">Magic</option>
        <option value='8'>Pistons</option>
            </select>

            <select  onChange={this.countPoints2}>
            <option value="1">Select Team</option>
        <option value="1">Warriors</option>
        <option value="2">Nuggets</option>
        <option value="3">Portland</option>
        <option value='4'>Houston</option>
        <option value="5">Jazz</option>
        <option value="6">Thunder</option>
        <option value="7">Spurs</option>
        <option value='8'>Clippers</option>
        <option value="1">Bucks</option>
        <option value="2">Raptors</option>
        <option value="3">Sixers</option>
        <option value='4'>Celtics</option>
        <option value="5">Pacers</option>
        <option value="6">Nets</option>
        <option value="7">Magic</option>
        <option value='8'>Pistons</option>
            </select>

            <select  onChange={this.countPoints3}>
            <option value="1">Select Team</option>
        <option value="1">Warriors</option>
        <option value="2">Nuggets</option>
        <option value="3">Portland</option>
        <option value='4'>Houston</option>
        <option value="5">Jazz</option>
        <option value="6">Thunder</option>
        <option value="7">Spurs</option>
        <option value='8'>Clippers</option>
        <option value="1">Bucks</option>
        <option value="2">Raptors</option>
        <option value="3">Sixers</option>
        <option value='4'>Celtics</option>
        <option value="5">Pacers</option>
        <option value="6">Nets</option>
        <option value="7">Magic</option>
        <option value='8'>Pistons</option>
            </select>

            <select  onChange={this.countPoints4}>
            <option value="1">Select Team</option>
        <option value="1">Warriors</option>
        <option value="2">Nuggets</option>
        <option value="3">Portland</option>
        <option value='4'>Houston</option>
        <option value="5">Jazz</option>
        <option value="6">Thunder</option>
        <option value="7">Spurs</option>
        <option value='8'>Clippers</option>
        <option value="1">Bucks</option>
        <option value="2">Raptors</option>
        <option value="3">Sixers</option>
        <option value='4'>Celtics</option>
        <option value="5">Pacers</option>
        <option value="6">Nets</option>
        <option value="7">Magic</option>
        <option value='8'>Pistons</option>
            </select>

            

            </div>
            <div className = 'wins'> 
            <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>

            <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>

            <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>

            <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>
            </div>


            <div className = 'pointHolder'>
            <h1>
                TOTAL POINTS
                <br></br>
                {this.state.totalPoints}
                <br></br>
               {this.state.team1}
                 </h1>
                
            
            </div>
            </div>
            
</div>
        )
    }
}

export default App;