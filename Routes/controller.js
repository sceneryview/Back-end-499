const { sql } = require('@vercel/postgres');

const read = async (req, res) => {
    try {
        const version = await sql`SELECT * FROM version;`;
        return version.rows;
    } catch (error) {
        console.log(error);
    }
      };

const create = async (req, res) => {
    try {
      const { main, text, link, avatar } = req.body;
      await sql`
      INSERT INTO version (main, text, link, avatar)
      VALUES (${main}, ${text}, ${link}, ${avatar})
    `;
    console.log(req.body);
      return res.status(200).json({ message: "Add Model successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to Add Model" });
    }
  };

const list = async (req, res) => {
    const id = req.params._id;
  try {
    const version = await sql`SELECT * FROM version WHERE _id = ${id};`;
    return version.rows;
  } catch (error) {
    console.log(error);
  }
};


const update = async (req, res) => {
    try {
        const id = req.params._id;
        const { main, text, link, avatar } = req.body;
        await sql` UPDATE version SET main = ${main}, text = ${text}, link = ${link}, avatar = ${avatar}
        WHERE _id = ${id};
        `;
        return res.status(200).json({ message: "Model updated successfully" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Failed to update model" });
            }    
    };

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        await sql`
        DELETE FROM version
        WHERE _id = ${id}
      `;
        return res.status(200).json({ message: "Model Delete successfully" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to Delete Model" });
      }
    };

module.exports = {
    read,
    list,
    create,
    update,
    remove
};
