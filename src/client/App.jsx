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
        this.countWins1 = this.countWins1.bind(this)
        this.countWins2 = this.countWins2.bind(this)
        this.countWins3 = this.countWins3.bind(this)
        this.countWins4 = this.countWins4.bind(this)
        this.countTotal = this.countTotal.bind(this)
        
    }
   
    countPoints1(e) {
        this.setState({team1 : e.target.value});
        console.log(this.state.team1)
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

 countWins1(e) {
     this.setState({team1w: e.target.value})
     console.log(this.state.team1w);
 }

 countWins2(e) {
    this.setState({team2w: e.target.value})
}

countWins3(e) {
    this.setState({team3w: e.target.value})
}

countWins4(e) {
    this.setState({team4w: e.target.value})
}

countTotal() {
    console.log('i was clicked')
    let team1Total = this.state.team1 * this.state.team1w;
    let team2Total = this.state.team2 * this.state.team2w;
    let team3Total = this.state.team3 * this.state.team3w;
    let team4Total = this.state.team4 * this.state.team4w;
    let total = team1Total + team2Total + team3Total +team4Total;
    this.setState({totalPoints: total})

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
            <select onChange={this.countWins1}>
            <option value="1">Select Number of Wins</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>

            <select onChange={this.countWins2}>>
            <option value="1">Select Number of Wins</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>

            <select onChange={this.countWins3}>>
            <option value="1">Select Number of Wins</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>

            <select onChange={this.countWins4}>>
            <option value="1">Select Number of Wins</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value='4'>4</option>
            </select>
            </div>
            <div>
                <button onClick = {this.countTotal}>Get Point Total</button>
            </div>

            <div className = 'pointHolder'>
            <h1>
                TOTAL POINTS
                <br></br>
                {this.state.totalPoints}
                <br></br>
               {this.state.team1}
               <br/>
               {this.state.team1w}
                 </h1>
                
            
            </div>
            </div>
            
</div>
        )
    }
}

export default App;