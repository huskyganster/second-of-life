document.addEventListener('DOMContentLoaded', () => {
  const counters = [
    // Section 1: Digital & Communication (1–10)
    { id: 'counter1',  label: 'Emails Sent Worldwide',           value: 0,    increment: 3000000, formatter: val => val.toLocaleString() },
    { id: 'counter2',  label: 'Tweets Posted',                   value: 0,    increment: 6000,    formatter: val => val.toLocaleString() },
    { id: 'counter3',  label: 'Google Searches',                 value: 0,    increment: 60000,   formatter: val => val.toLocaleString() },
    { id: 'counter4',  label: 'Facebook Posts',                  value: 0,    increment: 1000,    formatter: val => val.toLocaleString() },
    { id: 'counter5',  label: 'YouTube Videos Uploaded',         value: 0,    increment: 0.5,     formatter: val => val.toFixed(1) },
    { id: 'counter6',  label: 'Instagram Photos Posted',         value: 0,    increment: 3,       formatter: val => val.toLocaleString() },
    { id: 'counter7',  label: 'WhatsApp Messages Sent',          value: 0,    increment: 752,     formatter: val => val.toLocaleString() },
    { id: 'counter8',  label: 'Reddit Comments',                 value: 0,    increment: 200,     formatter: val => val.toLocaleString() },
    { id: 'counter9',  label: 'LinkedIn Posts',                  value: 0,    increment: 10,      formatter: val => val.toLocaleString() },
    { id: 'counter10', label: 'TikTok Videos Uploaded',          value: 0,    increment: 3,       formatter: val => val.toLocaleString() },

    // Section 2: Economics & Finance (11–18)
    { id: 'counter11', label: 'Money Printed',                   value: 0,    increment: 1200,    formatter: val => "$" + val.toLocaleString() },
    { id: 'counter12', label: 'People Getting Paid (US)',        value: 0,    increment: 129,     formatter: val => val.toLocaleString() },
    { id: 'counter13', label: 'Stock Trades (Global)',           value: 0,    increment: 40000,   formatter: val => val.toLocaleString() },
    { id: 'counter14', label: 'Credit Card Transactions',        value: 0,    increment: 2000,    formatter: val => val.toLocaleString() },
    { id: 'counter15', label: 'Bitcoin Transactions',            value: 0,    increment: 3,       formatter: val => val.toLocaleString() },
    { id: 'counter16', label: 'E-commerce Orders Worldwide',     value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter17', label: 'Money Spent on Advertising',      value: 0,    increment: 5000,    formatter: val => "$" + val.toLocaleString() },
    { id: 'counter18', label: 'Global Remittances Transferred',  value: 0,    increment: 1000000, formatter: val => "$" + val.toLocaleString() },

    // Section 3: Environment & Global (19–24)
    { id: 'counter19', label: 'CO2 Emitted (tons)',              value: 0,    increment: 3.17,    formatter: val => val.toFixed(2) },
    { id: 'counter20', label: 'Plastic Bottles Produced',        value: 0,    increment: 183,     formatter: val => val.toLocaleString() },
    { id: 'counter21', label: 'Cars Manufactured Worldwide',     value: 0,    increment: 2,       formatter: val => val.toLocaleString() },
    { id: 'counter22', label: 'New People Born',                 value: 0,    increment: 4.3,     formatter: val => val.toFixed(1) },
    { id: 'counter23', label: 'Deaths Worldwide',                value: 0,    increment: 1.8,     formatter: val => val.toFixed(1) },
    { id: 'counter24', label: 'Global Heartbeats',               value: 0,    increment: 9000000000, formatter: val => val.toLocaleString() },

    // Section 4: Social Media & Internet Engagement (25–30)
    { id: 'counter25', label: 'Snapchat Snaps Sent',             value: 0,    increment: 5,       formatter: val => val.toLocaleString() },
    { id: 'counter26', label: 'Pinterest Pins',                  value: 0,    increment: 2,       formatter: val => val.toLocaleString() },
    { id: 'counter27', label: 'Spotify Streams',                 value: 0,    increment: 200000,  formatter: val => val.toLocaleString() },
    { id: 'counter28', label: 'Netflix Streams Started',         value: 0,    increment: 300,     formatter: val => val.toLocaleString() },
    { id: 'counter29', label: 'Amazon Product Reviews',          value: 0,    increment: 5,       formatter: val => val.toLocaleString() },
    { id: 'counter30', label: 'ATM Withdrawals Worldwide',       value: 0,    increment: 100,     formatter: val => val.toLocaleString() },

    // Section 5: Cryptocurrency & Mobile Payments (31–33)
    { id: 'counter31', label: 'Ethereum Transactions',           value: 0,    increment: 15,      formatter: val => val.toLocaleString() },
    { id: 'counter32', label: 'Mobile Payments Transactions',    value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter33', label: 'E-commerce Revenue (USD)',        value: 0,    increment: 200000,  formatter: val => "$" + val.toLocaleString() },

    // Section 6: Entertainment & Consumer Activity (34–40)
    { id: 'counter34', label: 'Global App Downloads',            value: 0,    increment: 200,     formatter: val => val.toLocaleString() },
    { id: 'counter35', label: 'TV Shows Watched (streams)',      value: 0,    increment: 300,     formatter: val => val.toLocaleString() },
    { id: 'counter36', label: 'Music Albums Sold/Downloaded',    value: 0,    increment: 10,      formatter: val => val.toLocaleString() },
    { id: 'counter37', label: 'Video Game Downloads',            value: 0,    increment: 20,      formatter: val => val.toLocaleString() },
    { id: 'counter38', label: 'Books Sold',                      value: 0,    increment: 5,       formatter: val => val.toLocaleString() },
    { id: 'counter39', label: 'Fast Food Meals Served',          value: 0,    increment: 1000,    formatter: val => val.toLocaleString() },
    { id: 'counter40', label: 'Ice Cream Cones Sold',            value: 0,    increment: 50,      formatter: val => val.toLocaleString() },

    // Section 7: Transportation & Tech (41–50)
    { id: 'counter41', label: 'Uber Rides Booked',               value: 0,    increment: 20,      formatter: val => val.toLocaleString() },
    { id: 'counter42', label: 'Airplane Takeoffs Worldwide',     value: 0,    increment: 1,       formatter: val => val.toLocaleString() },
    { id: 'counter43', label: 'Mobile Phone Activations',        value: 0,    increment: 30,      formatter: val => val.toLocaleString() },
    { id: 'counter44', label: 'YouTube Comments Posted',         value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter45', label: 'LinkedIn Connections Made',       value: 0,    increment: 5,       formatter: val => val.toLocaleString() },
    { id: 'counter46', label: 'Google Maps Navigations',         value: 0,    increment: 10,      formatter: val => val.toLocaleString() },
    { id: 'counter47', label: 'Wikipedia Edits Made',            value: 0,    increment: 2,       formatter: val => val.toLocaleString() },
    { id: 'counter48', label: 'Amazon Packages Delivered',       value: 0,    increment: 40,      formatter: val => val.toLocaleString() },
    { id: 'counter49', label: 'Reddit Posts Created',            value: 0,    increment: 10,      formatter: val => val.toLocaleString() },
    { id: 'counter50', label: 'GitHub Commits Made',             value: 0,    increment: 25,      formatter: val => val.toLocaleString() },

    // Section 8: Health & Lifestyle (51–60)
    { id: 'counter51', label: 'Steps Taken Worldwide',           value: 0,    increment: 111000,  formatter: val => val.toLocaleString() },
    { id: 'counter52', label: 'Cigarettes Smoked Worldwide',     value: 0,    increment: 127000,  formatter: val => val.toLocaleString() },
    { id: 'counter53', label: 'Water Bottles Recycled',          value: 0,    increment: 1000,    formatter: val => val.toLocaleString() },
    { id: 'counter54', label: 'Calories Consumed Worldwide',     value: 0,    increment: 5000,    formatter: val => val.toLocaleString() },
    { id: 'counter55', label: 'Minutes of Exercise Logged',      value: 0,    increment: 200000,  formatter: val => val.toLocaleString() },
    { id: 'counter56', label: 'Total Social Media Posts',        value: 0,    increment: 500000,  formatter: val => val.toLocaleString() },
    { id: 'counter57', label: 'Online Video Views',              value: 0,    increment: 1000000, formatter: val => val.toLocaleString() },
    { id: 'counter58', label: 'Recipes Searched Online',         value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter59', label: 'Meditation Sessions Started',     value: 0,    increment: 200,     formatter: val => val.toLocaleString() },
    { id: 'counter60', label: 'Yoga Sessions Held',              value: 0,    increment: 100,     formatter: val => val.toLocaleString() },

    // Section 9: Science & Technology (61–70)
    { id: 'counter61', label: 'Research Papers Published',      value: 0,    increment: 1,       formatter: val => val.toLocaleString() },
    { id: 'counter62', label: 'Software Bugs Fixed Worldwide',  value: 0,    increment: 100,     formatter: val => val.toLocaleString() },
    { id: 'counter63', label: 'New Mobile Apps Launched',         value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter64', label: 'AI Research Projects Started',     value: 0,    increment: 2,       formatter: val => val.toLocaleString() },
    { id: 'counter65', label: 'Cyber Attacks Reported',           value: 0,    increment: 10,      formatter: val => val.toLocaleString() },
    { id: 'counter66', label: 'Data Bytes Transferred Worldwide', value: 0,   increment: 1e13,    formatter: val => val.toExponential(2) },
    { id: 'counter67', label: 'Quantum Computers Operated',     value: 0,    increment: 0.001,   formatter: val => val.toFixed(3) },
    { id: 'counter68', label: 'Robots Deployed in Industry',      value: 0,    increment: 0.5,     formatter: val => val.toLocaleString() },
    { id: 'counter69', label: 'Satellites Launched',              value: 0,    increment: 0.0005,  formatter: val => val.toFixed(4) },
    { id: 'counter70', label: 'Scientific Conferences Held',      value: 0,    increment: 0.05,    formatter: val => val.toFixed(2) },

    // Section 10: Sports & Recreation (71–80)
    { id: 'counter71', label: 'Goals Scored in Football',         value: 0,    increment: 0.05,    formatter: val => val.toFixed(2) },
    { id: 'counter72', label: 'Basketball Points Scored',         value: 0,    increment: 5,       formatter: val => val.toLocaleString() },
    { id: 'counter73', label: 'Cricket Runs Scored Worldwide',    value: 0,    increment: 10,      formatter: val => val.toLocaleString() },
    { id: 'counter74', label: 'New Sports Records Set',           value: 0,    increment: 0.0001,  formatter: val => val.toFixed(4) },
    { id: 'counter75', label: 'Marathons Completed Worldwide',    value: 0,    increment: 0.01,    formatter: val => val.toFixed(2) },
    { id: 'counter76', label: 'Minutes Watched in Sports Broadcasts', value: 0, increment: 1000,    formatter: val => val.toLocaleString() },
    { id: 'counter77', label: 'Tickets Sold for Sports Events',   value: 0,    increment: 20,      formatter: val => val.toLocaleString() },
    { id: 'counter78', label: 'Live Sports Streamed (Hours)',     value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter79', label: 'Fantasy Sports Lineups Created',   value: 0,    increment: 200,     formatter: val => val.toLocaleString() },
    { id: 'counter80', label: 'eSports Matches Started',          value: 0,    increment: 0.5,     formatter: val => val.toLocaleString() },

    // Section 11: Global Commerce & Retail (81–90)
    { id: 'counter81', label: 'Retail Transactions Worldwide',    value: 0,    increment: 500,     formatter: val => val.toLocaleString() },
    { id: 'counter82', label: 'Items Sold on Amazon',             value: 0,    increment: 100,     formatter: val => val.toLocaleString() },
    { id: 'counter83', label: 'Uber Eats Orders',                 value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter84', label: 'Grocery Deliveries',               value: 0,    increment: 200,     formatter: val => val.toLocaleString() },
    { id: 'counter85', label: 'Clothing Items Purchased Online',  value: 0,    increment: 80,      formatter: val => val.toLocaleString() },
    { id: 'counter86', label: 'Etsy Orders',                      value: 0,    increment: 30,      formatter: val => val.toLocaleString() },
    { id: 'counter87', label: 'Digital Subscriptions Purchased', value: 0,    increment: 20,      formatter: val => val.toLocaleString() },
    { id: 'counter88', label: 'Consumer Electronics Sold',        value: 0,    increment: 10,      formatter: val => val.toLocaleString() },
    { id: 'counter89', label: 'Pharmaceutical Sales (USD)',       value: 0,    increment: 10000,   formatter: val => "$" + val.toLocaleString() },
    { id: 'counter90', label: 'Luxury Goods Sold (USD)',          value: 0,    increment: 5000,    formatter: val => "$" + val.toLocaleString() },

    // Section 12: Miscellaneous (91–100)
    { id: 'counter91', label: 'Weather Updates Sent Worldwide',   value: 0,    increment: 300,     formatter: val => val.toLocaleString() },
    { id: 'counter92', label: 'News Articles Published',          value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter93', label: 'Blogs Posted',                     value: 0,    increment: 20,      formatter: val => val.toLocaleString() },
    { id: 'counter94', label: 'Online Courses Enrolled',          value: 0,    increment: 100,     formatter: val => val.toLocaleString() },
    { id: 'counter95', label: 'Podcasts Uploaded',                value: 0,    increment: 1,       formatter: val => val.toLocaleString() },
    { id: 'counter96', label: 'Charity Donations Made (USD)',     value: 0,    increment: 500,     formatter: val => "$" + val.toLocaleString() },
    { id: 'counter97', label: 'Volunteers Registered',             value: 0,    increment: 5,       formatter: val => val.toLocaleString() },
    { id: 'counter98', label: 'Books Borrowed from Libraries',     value: 0,    increment: 50,      formatter: val => val.toLocaleString() },
    { id: 'counter99', label: 'Memes Created',                     value: 0,    increment: 100,     formatter: val => val.toLocaleString() },
    { id: 'counter100',label: 'Virtual Reality Sessions Started',  value: 0,    increment: 2,       formatter: val => val.toLocaleString() }
  ];

  // Initialize display for each counter
  counters.forEach(counter => {
    const el = document.querySelector(`#${counter.id} h2`);
    if (el) {
      el.textContent = counter.formatter(counter.value);
    }
  });

  // Update counters every second
  setInterval(() => {
    counters.forEach(counter => {
      counter.value += counter.increment;
      const el = document.querySelector(`#${counter.id} h2`);
      if (el) {
        el.textContent = counter.formatter(counter.value);
      }
    });
  }, 1000);
});
