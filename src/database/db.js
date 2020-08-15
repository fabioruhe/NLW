const Database = require('sqlite-async')

function execute(db) {
    //criar tabelas
    //retorna as infos do DB para fora da função
    return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        whatsapp TEXT,
        bio TEXT
    );

    CREATE TABLE IF NOT EXISTS classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject TEXT,
        cost TEXT,
        proffy_id INTEGER
    );

    CREATE TABLE IF NOT EXISTS class_schedule(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_id INTEGER,
        weekday INTEGER,
        time_from,
        time_to

    );
    `)
}
//export do DB para fora deste arquivo
module.exports = Database.open(__dirname +'/database.sqlite').then(execute)