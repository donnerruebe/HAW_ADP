var ghostMidPoint = 0;
var midPoint = function(sequenz){
    ghostCount = 0;
    if(sequenz.length < 3){
        return -1;  
    }
    // Beginn zusätzlicher Speicher
    var sumBegin = 0;
    var sumEnd = 0;
    // Ende ZusätzlicherSpeicher
    // ZusätzlicherSpeicher == (2 * int) == O(C) < O(n)
    
    var j = 1;
    var k = sequenz.length;
  
    while (j < k){
          ghostCount++;
          sumEnd += sequenz[j]; 
          j++; 
      }
    j = 0;
    while (j < (k -2)){
          ghostCount++;
          sumBegin += sequenz[j];
          sumEnd -= sequenz[j+1]
          if (sumBegin == sumEnd){
            return j+1;
          }
          j++;
    }
    return -1;
};
  
$().ready(function () {
    test42 = new RuebeTest("#aufgabe42results");
    test42.assertInfo("Aufgabe 4.2 Tests");
    var testvar = [1,1,2,3,2,1,1];
    test42.assertTest(midPoint(testvar), 3, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [3,2,3,2,1,1,1];
    test42.assertTest(midPoint(testvar), 2, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [1,1,1,2,2,3,2];
    test42.assertTest(midPoint(testvar), 4, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [1,1,1];
    test42.assertTest(midPoint(testvar), 1, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [1,1];
    test42.assertTest(midPoint(testvar), -1, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [2,1,1,1];
    test42.assertTest(midPoint(testvar), 1, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [1,1,1,2];
    test42.assertTest(midPoint(testvar), 2, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [3,1,1,1,2];
    test42.assertTest(midPoint(testvar), -1, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [1,1,3,0,0,0,0,0,1,1];
    test42.assertTest(midPoint(testvar), 2, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [4,-1,0,3];
    test42.assertTest(midPoint(testvar), 2, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);
    testvar = [3,0,-1,4];
    test42.assertTest(midPoint(testvar), 1, "input: [" + testvar + "]");
    test42.assertTrue(ghostMidPoint <= testvar.length, "Runtime: " + ghostCount + " for [" + testvar + "] Max is: 2*" + testvar.length);

    $("#aufgabe42code").text($("#aufgabe42script").text());
});