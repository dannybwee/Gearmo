const path = require("path");

exports.getPage = (req, res, next) => {
  return res.sendFile(path.dirname(__dirname)+'/public/index.html');
};

exports.postGetStylist= async (req,res,next) =>{
    // if they make a post request here, do code:
    let connection = req.pg;
    let query = `
    SELECT *, ca.goodstanding
    FROM users u
    JOIN user_address ua ON (ua.user_join_id = u.id)
    JOIN address a ON (a.id = ua.address_join_id)
    JOIN customer c ON (c.user_id = u.id)
    JOIN customer_account ca on (c.id = ca.id)    
    WHERE c.id = 1
    ORDER BY (case when ua.primary then 1 when ua.primary is null then 2 else 3 end) asc
    `
    let final = await connection.query(query)
    return res.send(final.rows[0])
  };