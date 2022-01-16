// How many stairs will Suzuki climb in 20 years?

// DESCRIPTION:
// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

function stairsIn20(s){
    let Newsunday = s[0].reduce((sum, acc) => sum + acc, 0)
    let Newmonday = s[1].reduce ((sum, acc)=> sum + acc, 0)
    let Newtuesday = s[2].reduce ((sum, acc)=> sum + acc, 0)
    let Newwednesday = s[3].reduce ((sum, acc)=> sum + acc, 0)
    let Newthursday = s[4].reduce ((sum, acc)=> sum + acc, 0)
    let Newfriday = s[5].reduce ((sum, acc)=> sum + acc, 0)
    let Newsaturday = s[6].reduce ((sum, acc)=> sum + acc, 0)
    
    return (Newsunday + Newmonday + Newtuesday + Newwednesday + Newthursday + Newfriday + Newsaturday) * 20
    
  }

