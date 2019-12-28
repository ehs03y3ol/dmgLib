//These are the global variables for the correct work of the implementation.



//This is the global dmg buffer that will copy into canvas html

var dmgScreen =
{
  dmgVertResolution : 144, //Vertical resolution
  dmgHorResolution : 160, //Horizontal resolution

  VRAMBuffer: 0, // Active Buffer, active buffer is R/O
  dmgColors: 4, // 4 Colors, if anything else it's SYNC
  dmgBuffer0: [],
  dmgBuffer1: [],

  //Starts buffers as 0, it will not help so much but it will define them as integer and show a blank screen

    fInitBuffer: function()
    {  //
      for (var v = 0; v < this.dmgVertResolution + 1 ; v++)
      { // For every vertical lane (v) +1 for Sync
        for (var h = 0; h < this.dmgHorResolution + 1 ; h++)
        { //For every horizontal pixel avaible (h) +1 for Sync
          this.dmgBuffer0[v,h] = 0
          this.dmgBuffer1[v,h] = 0
        }
      }
    }, // end of finitBuffer();

    fDrawDot: function(PosHor,PosVert,Color) //
    { //Basic draw function
      switch(this.VRAMBuffer)
      {  // Switching buffer is automatically
        case 0: //Go to the other buffer
          this.dmgBuffer1[PosVert,PosHor] = Color
          break;

        case 1: //Go to the other buffer
          this.dmgBuffer0[PosVert,PosHor] = Color
          break;

        default: //default error
          console.log("Something extrange happend")
          break;
      } //end of Switch

    }, //end of fDrawDot

    fCanvasPrint : function(Buffer)
    {
      ctx.fillStyle = 'green';
      for (var v = 0; v < this.dmgVertResolution; v++)
      { // v increment for every line
        for (var h = 0; h < this.dmgHorResolution; h++)
        { // h for every pixel
          //console.log(i)
          ctx.fillRect( v * 4 + 10, 2 + h * 4 + 10,  3, 3);
        }

      } //end of array

    }
} //end of dmgScreen Object

// Initialitze the screen with 0
