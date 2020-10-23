<template>
  <v-container>

       <v-data-table no-data-text="Geen gegevens gevonden" dense :headers="headers" :items="opdrachten" >

      

      </v-data-table>
   
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  created() {
    const fetchData = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const _this = this
    fetch("sap/opu/odata/sap/ZAPR_SRV_MAIN_SRV/OpdrachtSet?$format=json&sap-client=200", fetchData).then(d => {
      console.log(d)
      return d.json()
    }).then(r => {
      console.log(r)
      _this.opdrachten = r.d.results
    }
    )
    
  },

  data: () => ({
    opdrachten: [],
    headers: [ 
      { text: 'Bestelnummer', value: 'Bestelnummer' },
       { text: 'Klantorder', value: 'Klantorder' },
        { text: 'Serviceorder', value: 'Serviceorder' },
         { text: 'Straat', value: 'Straat' },
          { text: 'Plaats', value: 'Plaats' }

    

    ]
  }),
};
</script>
