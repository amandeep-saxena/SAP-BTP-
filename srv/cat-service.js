const cds = require('@sap/cds');
const express = require('express');
app = express();

class MyService extends cds.ApplicationService {

    async init() {
        const db = await cds.connect.to('db');

        const { invoice } = cds.entities('addmin');

        this.on('READ', 'readDATA', async (req) => {
            let add = await SELECT.from(invoice)
            console.log(JSON.stringify(add))
            return add;
        })

        this.on('READ', 'writeDATA', async (req) => {

            let tranData = [{
                "NAME": "jjh",
                "WORK": "node",
                "CODE": 3435
            }, {
                "NAME": "dep",
                "WORK": "js",
                "CODE": 12344,
            }, {
                "NAME": "ram",
                "WORK": "go",
                "CODE": 1234
            }]



            for (let i = 0; i < tranData.length; i++) {
                await INSERT.into(invoice)
                    .columns("NAME", "WORK", "CODE")
                    .values(tranData[i]['NAME'], tranData[i]['WORK'], tranData[i]['CODE']);
            }
            let add = await SELECT.from(invoice);
            return add;
        })

        this.on('READ', 'deleteDATA', async (req) => {
            await DELETE.from(invoice).where({CODE : 12344});
            let add = await SELECT.from(invoice)
            // console.log(JSON.stringify(add))
            return add;
        })
    
        this.on('READ','updateDATA' , async (req) =>{
            await UPDATE.from(invoice).set({ NAME: 'NAME' }).where({ NAME: 'ram' });
            const updatedData = await SELECT.from(invoice).where({ NAME: 'Updated Name' });

      // Return the updated data
      return updatedData;
        })


        await super.init();
    }
}




module.exports = { MyService };














// const express = require('express');
// const app = express();


// require('./schema-cat-service')(app);




//  const port = process.env.PORT || 3001;

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });






// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function () {
//   const { invoice } = this.entities;

//   this.on('CREATE', invoice, async (req) => {
//     const { data } = req;
//     const createdData = await cds.transaction(req).run(INSERT.into(invoice).entries(data));
//     return createdData;
//   });
// });
