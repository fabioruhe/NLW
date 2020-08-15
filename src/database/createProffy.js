module.exports = async function(db,{proffyValue, classValue, classScheduleValues}){
    //inserir dados na tabela de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

            const proffy_id = insertedProffy.lastId

    
            //inserir dados na tabla de classes
            const insertedClasses = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${classValue.proffy_id}"
        );
    `)
    const class_id = insertedClasses.lastID
            
   //inserir dados na tabla de classes(é um array,usar estrutura de repetição)
            const insertedAllclassScheduleValues = classScheduleValues.map((classScheduleValue) => {
                return db.run(`
                    INSERT INTO class_schedule (
                        class_id,
                        weekday,
                        time_from,
                        time_to
                    ) VALUES (
                        "${class_id},
                        "${classScheduleValue.weekday}",
                        "${classScheduleValue.time_from}",
                        "${classScheduleValue.time_to}"
                        
                    );
                    `)

            })

            await Promise.all(insertedAllclassScheduleValues)
}