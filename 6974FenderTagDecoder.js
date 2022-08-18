// --------------------------------------------------------------
// 6974FenderTagDecoder.js Java Script file
// Copyright (c) 2007 Jani Immonen
// www.jani-immonen.net
// Date: 2.11.2007
//
// This file implements 1969-1974 Mopar Fender Tag Decoder
// Information may or may not be correct, use at your own risk
//


// my cuda
/*
BS23H3B458049
color: JF8
engine: E55
Trans: D21
int: A6X9
stripe: V6X
A01 A36 A51 B41 D91 G37 H31 J97 J25 J52 J54 S77 
*/

// define the error handler
onerror = ErrorHandler;
function ErrorHandler(strMessage, strURL, iLine)
{
	var strError="";
	strError = "JavaScript error!\n\n";
	strError += "Error: " + strMessage + "\n";
	strError += "URL: " + strURL + "\n";
	strError += "Line: " + iLine + "\n\n";
	strError += "Click OK to continue.\n\n";
	alert(strError);
    return true;
}


 // ClearTAG
// clear input and result boxes
function ClearTAG()
{
	document.TAGDecodedForm.boxResults.value = "";
	
	document.TAGDecodedForm.code1.value = "";
	document.TAGDecodedForm.code2.value = "";
	document.TAGDecodedForm.code3.value = "";
	document.TAGDecodedForm.code4.value = "";
	document.TAGDecodedForm.code5.value = "";
	document.TAGDecodedForm.code6.value = "";
	document.TAGDecodedForm.code7.value = "";
	document.TAGDecodedForm.code8.value = "";
	document.TAGDecodedForm.code9.value = "";
	document.TAGDecodedForm.code10.value = "";
	document.TAGDecodedForm.code11.value = "";
	document.TAGDecodedForm.code12.value = "";
	document.TAGDecodedForm.code13.value = "";
	document.TAGDecodedForm.code14.value = "";
	document.TAGDecodedForm.code15.value = "";
	document.TAGDecodedForm.code16.value = "";
	document.TAGDecodedForm.code17.value = "";
	document.TAGDecodedForm.code18.value = "";
	document.TAGDecodedForm.code19.value = "";
	document.TAGDecodedForm.code20.value = "";
	document.TAGDecodedForm.code21.value = "";
	document.TAGDecodedForm.code22.value = "";
	document.TAGDecodedForm.code23.value = "";
	document.TAGDecodedForm.code24.value = "";
	document.TAGDecodedForm.code25.value = "";
    document.TAGDecodedForm.code26.value = "";
	document.TAGDecodedForm.code27.value = "";
	document.TAGDecodedForm.code28.value = "";
	document.TAGDecodedForm.code29.value = "";
	document.TAGDecodedForm.code30.value = "";
	document.TAGDecodedForm.code31.value = "";
	document.TAGDecodedForm.code32.value = "";
	document.TAGDecodedForm.code33.value = "";
	document.TAGDecodedForm.code34.value = "";
}


// DecodeTAG
// get information from input boxes and decode
function DecodeTAG()
{
	// make all input uppercase
	document.TAGDecodedForm.code1.value = document.TAGDecodedForm.code1.value.toUpperCase();
	document.TAGDecodedForm.code2.value = document.TAGDecodedForm.code2.value.toUpperCase();
	document.TAGDecodedForm.code3.value = document.TAGDecodedForm.code3.value.toUpperCase();
	document.TAGDecodedForm.code4.value = document.TAGDecodedForm.code4.value.toUpperCase();
	document.TAGDecodedForm.code5.value = document.TAGDecodedForm.code5.value.toUpperCase();
	document.TAGDecodedForm.code6.value = document.TAGDecodedForm.code6.value.toUpperCase();
	document.TAGDecodedForm.code7.value = document.TAGDecodedForm.code7.value.toUpperCase();
	document.TAGDecodedForm.code8.value = document.TAGDecodedForm.code8.value.toUpperCase();
	document.TAGDecodedForm.code9.value = document.TAGDecodedForm.code9.value.toUpperCase();
	document.TAGDecodedForm.code10.value = document.TAGDecodedForm.code10.value.toUpperCase();
	document.TAGDecodedForm.code11.value = document.TAGDecodedForm.code11.value.toUpperCase();
	document.TAGDecodedForm.code12.value = document.TAGDecodedForm.code12.value.toUpperCase();
	document.TAGDecodedForm.code13.value = document.TAGDecodedForm.code13.value.toUpperCase();
	document.TAGDecodedForm.code14.value = document.TAGDecodedForm.code14.value.toUpperCase();
	document.TAGDecodedForm.code15.value = document.TAGDecodedForm.code15.value.toUpperCase();
	document.TAGDecodedForm.code16.value = document.TAGDecodedForm.code16.value.toUpperCase();
	document.TAGDecodedForm.code17.value = document.TAGDecodedForm.code17.value.toUpperCase();
	document.TAGDecodedForm.code18.value = document.TAGDecodedForm.code18.value.toUpperCase();
	document.TAGDecodedForm.code19.value = document.TAGDecodedForm.code19.value.toUpperCase();
	document.TAGDecodedForm.code20.value = document.TAGDecodedForm.code20.value.toUpperCase();
	document.TAGDecodedForm.code21.value = document.TAGDecodedForm.code21.value.toUpperCase();
	document.TAGDecodedForm.code22.value = document.TAGDecodedForm.code22.value.toUpperCase();
	document.TAGDecodedForm.code23.value = document.TAGDecodedForm.code23.value.toUpperCase();
	document.TAGDecodedForm.code24.value = document.TAGDecodedForm.code24.value.toUpperCase();
	document.TAGDecodedForm.code25.value = document.TAGDecodedForm.code25.value.toUpperCase();
	document.TAGDecodedForm.code26.value = document.TAGDecodedForm.code26.value.toUpperCase();
	document.TAGDecodedForm.code27.value = document.TAGDecodedForm.code27.value.toUpperCase();
	document.TAGDecodedForm.code28.value = document.TAGDecodedForm.code28.value.toUpperCase();
	document.TAGDecodedForm.code29.value = document.TAGDecodedForm.code29.value.toUpperCase();
	document.TAGDecodedForm.code30.value = document.TAGDecodedForm.code30.value.toUpperCase();
	document.TAGDecodedForm.code31.value = document.TAGDecodedForm.code31.value.toUpperCase();
	document.TAGDecodedForm.code32.value = document.TAGDecodedForm.code32.value.toUpperCase();
	document.TAGDecodedForm.code33.value = document.TAGDecodedForm.code33.value.toUpperCase();
	document.TAGDecodedForm.code34.value = document.TAGDecodedForm.code34.value.toUpperCase();
	

	var strMessage = "";
	
	var strCarLine = document.TAGDecodedForm.code3.value.substring(0,1);
	var strClass = document.TAGDecodedForm.code3.value.substring(1,2);
	var strBody = document.TAGDecodedForm.code3.value.substring(2,4);
	var strEngine = document.TAGDecodedForm.code2.value.substring(0,1);
	var strYear = document.TAGDecodedForm.code2.value.substring(1,2);
	var strPlant = document.TAGDecodedForm.code2.value.substring(2,3);

	strMessage = document.TAGDecodedForm.code3.value;
	strMessage += ":\n";
	strMessage += DecodeCarLine(strCarLine, strYear);
	strMessage += "\n";
	strMessage += DecodePriceClass(strCarLine, strClass, strEngine, strYear);
	strMessage += "\n";
	strMessage += DecodeBodyType(strBody);
	strMessage += "\n\n";
	
	strMessage += document.TAGDecodedForm.code2.value;
	strMessage += ": ";
	strMessage += DecodeEngine(strEngine, strYear);
	strMessage += "\n";
	strMessage += DecodeModelYear(strYear);
	strMessage += "\n";
	strMessage += DecodeAssemblyPlant(strPlant);
	strMessage += "\n\n";
	
	strMessage += document.TAGDecodedForm.code1.value;
	strMessage += ":\t";
	strMessage += "Sequence number\n\n";

	strMessage += AddCode(document.TAGDecodedForm.code5.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code4.value, strYear);

	strMessage += AddExtColor(document.TAGDecodedForm.code10.value, strYear);
	strMessage += AddIntColor(document.TAGDecodedForm.code9.value, strYear);
	strMessage += AddUpperDoorColor(document.TAGDecodedForm.code8.value, strYear);
	strMessage += document.TAGDecodedForm.code7.value;
	strMessage += ": \tBuild Date: ";
	strMessage += GetBuildDate(document.TAGDecodedForm.code7.value, strYear);
	strMessage += "\n";

	strMessage += document.TAGDecodedForm.code6.value;
	strMessage += ":\t";
	strMessage += "Order number\n\n";

	strMessage += AddCode(document.TAGDecodedForm.code16.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code15.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code14.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code13.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code12.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code11.value, strYear);
	strMessage += "\n";

	strMessage += AddCode(document.TAGDecodedForm.code22.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code21.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code20.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code19.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code18.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code17.value, strYear);
	strMessage += "\n";

	strMessage += AddCode(document.TAGDecodedForm.code28.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code27.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code26.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code25.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code24.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code23.value, strYear);
	strMessage += "\n";

	strMessage += AddCode(document.TAGDecodedForm.code34.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code33.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code32.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code31.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code30.value, strYear);
	strMessage += AddCode(document.TAGDecodedForm.code29.value, strYear);
	strMessage += "\n";

	// copy result into the results text box
	document.TAGDecodedForm.boxResults.value = strMessage;
}


function ExtColor1969(strCode)
{
	// 1969 colors
	if (strCode == "A4") return "Silver Metallic (Dodge & Plymouth), Platinum Metallic (Chrysler & Imperial)";
	if (strCode == "A9") return "Dark Gray Metallic (Chrysler), Charcoal Metallic (Imperial)";
	if (strCode == "B3") return "Light Blue Metallic (Dodge), Ice Blue Metallic (Plymouth), Bahama Blue Metallic (Chrysler & Imperial)";
	if (strCode == "B5") return "Bright Blue Metallic (Dodge), Blue Fire Metallic (Plymouth)";
	if (strCode == "B7") return "Medium Blue Metallic (Dodge), Jamaica Blue Metallic (Plymouth), Jubilee Blue Metallic (Chrysler)";
	if (strCode == "B9") return "Dark Blue Metallic (Dodge), Midnight Blue Metallic (Imperial)";
	if (strCode == "C3") return "Ice Blue Metallic (Dodge)";
	if (strCode == "E7") return "Cordovan Metallic (Dodge), Dark Briar Metallic (Chrysler & Imperial)";
	if (strCode == "F3") return "Light Green Metallic (Dodge), Frost Green Metallic (Plymouth), Surf Green Metallic (Chrysler & Imperial)";
	if (strCode == "F5") return "Medium Green Metallic (Dodge), Limelight Metallic (Plymouth), Avocado Metallic (Chrysler)";
	if (strCode == "F6") return "Bright Green Metallic (Dodge)";
	if (strCode == "F8") return "Dark Green Metallic (Dodge), Ivy Green Metallic (Plymouth), Jade Green Metallic (Chrysler & Imperial)";
	if (strCode == "F9") return "Dark Emerald Metallic (Imperial)";
	if (strCode == "K2") return "Vitamin 'C' Orange (Plymouth)";
	if (strCode == "L1") return "Beige (Dodge), Sandbebble Beige (Plymouth), Sandalwood (Chrysler), Navaho Beige (Imperial)";
	if (strCode == "M9") return "Deep Plum (Imperial)";
	if (strCode == "Q4") return "Light Turquoise Metallic (Dodge), Aquamarine Metallic (Chrysler & Imperial)";
	if (strCode == "Q5") return "Bright Turquoise Metallic (Dodge), Seafoam Turquoise Metallic (Plymouth)";
	if (strCode == "R4") return "Charger Red (Dodge), Barracuda Orange (Plymouth)";
	if (strCode == "R6") return "Red (Dodge), Scorch Red (Plymouth), Crimson (Chrysler)";
	if (strCode == "T3") return "Light Bronze Metallic (Dodge), Honey Bronze Metallic (Plymouth), Bronze Mist Metallic (Chrysler & Imperial)";
	if (strCode == "T5") return "Copper Metallic (Dodge), Bronze Fire Metallic (Plymouth), Burnished Bronze Metallic (Chrysler)";
	if (strCode == "T7") return "Dark Bronze Metallic (Dodge), Saddle Bronze Metallic (Plymouth), Tuscan Bronze Metallic (Chrysler & Imperial)";
	if (strCode == "V2") return "Hemi Orange (Dodge)";
	if (strCode == "W1") return "White (Dodge), Alpine White (Plymouth), Spinnaker White (Chrysler & Imperial)";
	if (strCode == "X9") return "Black (Dodge), Black Velvet (Plymouth), Formal Black (Chrysler & Imperial)";
	if (strCode == "Y2") return "Yellow (Dodge), Sunfire Yellow (Plymouth)";
	if (strCode == "Y3") return "Cream (Dodge), Yellow Gold (Plymouth), Antique Ivory (Chrysler), Champagene (Imperial)";
	if (strCode == "Y4") return "Gold Metallic (Dodge), Spanish Gold Metallic (Plymouth), Classic Gold Metallic (Chrysler & Imperial)";
	if (strCode == "Y5") return "Mystic Gold Metallic (Chrysler & Imperial)";
	if (strCode == "Y6") return "Gold Metallic (Dodge), Citron Gold Metallic (Plymouth)";
	if (strCode == "99") return "Special Order";

	return "Unknown";
}


function ExtColor1970(strCode)
{
    // 1970 colors
    if (strCode == "A4") return "Silver Metallic (Dodge & Plymouth), Platinum Metallic (Chrysler & Imperial)";
    if (strCode == "A9") return "Dark Gray Metallic (Chrysler), Charcoal Metallic (Imperial)";
    if (strCode == "B3") return "Light Blue Metallic (Dodge), Ice Blue Metallic (Plymouth), Bahama Blue Metallic (Chrysler & Imperial)";
    if (strCode == "B5") return "Bright Blue Metallic (Dodge), Blue Fire Metallic (Plymouth)";
    if (strCode == "B7") return "Dark Blue Metallic (Dodge), Jamaica Blue Metallic (Plymouth), Jubilee Blue Metallic (Chrysler & Imperial)";
    if (strCode == "C7") return "Plum Crazy Metallic (Dodge), In-Violet Metallic (Plymouth)";
    if (strCode == "E5") return "Bright Red (Dodge), Rallye Red (Plymouth)";
    if (strCode == "F3") return "Dark Green Metallic";
    if (strCode == "F4") return "Light Green Metallic (Dodge), Lime Green Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "F5") return "Medium Green Metallic (Dodge), Limelight Metallic (Plymouth), Avocado Metallic (Chrysler)";
    if (strCode == "F6") return "Bright Green Metallic (Dodge)";
    if (strCode == "F8") return "Dark Green Metallic (Dodge), Ivy Green Metallic (Plymouth), Jade Green Metallic (Chrysler & Imperial)";
    if (strCode == "F9") return "Dark Emerald Metallic (Chrysler & Imperial)";
    if (strCode == "J5") return "Sublime (Dodge), Limelight Metallic (Plymouth)";
    if (strCode == "J6") return "Green Go (Dodge), Sassy Grass Green (Plymouth)";
    if (strCode == "K2") return "Go Mango (Dodge), Vitamin 'C' Orange (Plymouth)";
    if (strCode == "K3") return "Burnt Orange Metallic (Plymouth)";
    if (strCode == "K5") return "Dark Burnt Orange Metallic (Dodge), Deep Burnt Orange Metallic (Plymouth)";
    if (strCode == "L1") return "Beige (Dodge), Sandbebble Beige (Plymouth), Sandalwood (Chrysler), Navaho Beige (Imperial)";
    if (strCode == "L6") return "Aztec Gold Metallic (Chrysler & Imperial)";
    if (strCode == "M3") return "Panther Pink (Dodge), Moulon Rouge (Plymouth)";
    if (strCode == "M9") return "Deep Plum (Imperial)";
    if (strCode == "P6") return "Frosted Teal Metallic (Plymouth), Teal Metallic (Chrysler & Imperial)";
    if (strCode == "Q3") return "Light Turquoise Metallic (Dodge), ";
    if (strCode == "R6") return "Red (Dodge), Scorch Red (Plymouth), Crimson (Chrysler)";
    if (strCode == "R8") return "Burgundy Metallic (Imperial)";
    if (strCode == "T3") return "Tan Metallic (Dodge), Sahara Tan Metallic (Plymouth), Satin Tan Metallic (Chrysler & Imperial)";
    if (strCode == "T6") return "Dark Tan Metallic (Dodge), Burnt Tan Metallic (Plymouth), Deep Bronze Metallic (Chrysler & Imperial)";
    if (strCode == "T8") return "Walnut Metallic (Plymouth & Imperial)";
    if (strCode == "V2") return "Hemi Orange (Dodge), Tor-Red (Plymouth)";
    if (strCode == "W1") return "White (Dodge), Alpine White (Plymouth), Spinnaker White (Chrysler & Imperial)";
    if (strCode == "X9") return "Black (Dodge), Black Velvet (Plymouth), Formal Black (Chrysler & Imperial)";
    if (strCode == "Y1") return "Banana (Dodge), Lemon Twist (Plymouth)";
    if (strCode == "Y2") return "Yellow (Dodge), Sunfire Yellow (Plymouth)";
    if (strCode == "Y3") return "Cream (Dodge), Yellow Gold (Plymouth), Antique Ivory (Chrysler), Champagene (Imperial)";
    if (strCode == "Y4") return "Light Gold Metallic (Dodge), Citron Mist Metallic (Plymouth), Mystic Gold Metallic (Chrysler & Imperial)";
    if (strCode == "Y5") return "Mystic Gold Metallic (Chrysler & Imperial)";
    if (strCode == "Y6") return "Gold Metallic (Dodge), Citron Gold Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "99") return "Special Order";

    return "Unknown";
}


function ExtColor1971(strCode)
{
	// 1971 colors
    if (strCode == "A4") return "Light Gunmetal Metallic (Dodge), Winchester Gray Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "A8") return "Gunmetal Gray Metallic (Dodge), Slate Gray Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "A9") return "Charcoal Metallic (Imperial)";
    if (strCode == "B2") return "Light Blue Metallic (Dodge), Glacial Blue Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "B5") return "Bright Blue Metallic (Dodge), True Blue Metallic (Plymouth)";
    if (strCode == "B7") return "Dark Blue Metallic (Dodge), Evening Blue Metallic (Plymouth & Chrysler)";
    if (strCode == "B9") return "Midnight Blue Metallic (Imperial)";
    if (strCode == "C7") return "Plum Crazy (Dodge), In-Violet Metallic (Plymouth)";
    if (strCode == "C8") return "Indigo Metallic (Dodge), Mood Indico Metallic (Plymouth)";
    if (strCode == "E5") return "Bright Red (Dodge), Rallye Red (Plymouth, Chrysler & Imperial)";
    if (strCode == "E7") return "Burgundy Metallic (Dodge), Burnished Red Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "F3") return "Medium Green Metallic (Dodge), Amber Sherwood Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "F7") return "Dark Green Metallic (Dodge), Sherwood Green Metallic (Plymouth)";
    if (strCode == "F9") return "Avocado Metallic (Chrysler & Imperial)";
    if (strCode == "J3") return "Willow Green (Dodge)";
    if (strCode == "J4") return "Lime Green Metallic (Dodge), April Green Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "J6") return "Green Go (Dodge), Sassy-Grass Green (Plymouth)";
    if (strCode == "K6") return "Dark Bronze Metallic (Dodge), Autumn Bronze Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "L1") return "Sandalwood Beige";
	if (strCode == "L5") return "Butterscotch (Dodge), Bahama Yellow (Plymouth)";
	if (strCode == "L6") return "Aztec Gold Metallic (Chrysler & Imperial)";
	if (strCode == "M8") return "Sparkling Burgundy Metallic (Imperial)";
	if (strCode == "Q5") return "Turquoise Metallic (Dodge), Coral Turqouise Metallic (Plymouth, Chrysler & Imperial)";
	if (strCode == "T2") return "Tan Metallic (Dodge), Tunisian Tan Metallic (Plymouth)";
	if (strCode == "T8") return "Dark Tan Metallic (Dodge), Tahitian Walnut Metallic (Plymouth, Chrysler & Imperial)";
	if (strCode == "V2") return "Hemi Orange (Dodge), Tor-Red (Plymouth)";
	if (strCode == "W1") return "White (Dodge), Spinnaker White (Plymouth, Chrysler & Imperial)";
	if (strCode == "W3") return "Bright White (Dodge), Sno-White (Plymouth)";
	if (strCode == "X9") return "Black (Dodge), Formal Black (Plymouth)";
    if (strCode == "Y1") return "Top Banana Yellow (Dodge), Lemon Twist (Chrysler)";
    if (strCode == "Y3") return "Citron Yella (Dodge), Curious Yellow (Plymouth)";
    if (strCode == "Y4") return "Light Gold (Plymouth), Honeydew (Imperial)";
    if (strCode == "Y5") return "Crystal Dawn (Chrysler & Imperial)";
    if (strCode == "Y7") return "Heritage Gold Metallic (Dodge)";
    if (strCode == "Y8") return "Gold Metallic (Dodge), Gold Leaf Metallic (Plymouth)";
    if (strCode == "Y9") return "Dark Gold Metallic (Dodge), Tawny Gold Metallic (Plymouth, Chrysler & Imperial)";
	if (strCode == "99") return "Special Order";
	
	return "Unknown";
}


function ExtColor1972(strCode)
{
	// 1972 colors
    if (strCode == "A4") return "Light Gunmetal Metallic (Dodge), Winchester Gray Metallic (Plymouth, Chrysler & Imperial)";
    if (strCode == "A5") return "Silver Frost Metallic";
    if (strCode == "A9") return "Charcoal Metallic";
    if (strCode == "B1") return "Powder Blue (Dodge), Blue Sky (Plymouth, Chrysler, Imperial)";
    if (strCode == "B3") return "Blue Streak (Dodge), Basin Street Blue (Plymouth)";
    if (strCode == "B5") return "Bright Blue Metallic (Dodge), True Blue Metallic (Plymouth, Chrysler, Imperial)";
    if (strCode == "B7") return "Midnight Blue Metallic (Dodge), Evening Blue Metallic (Plymouth, Chrysler, Imperial)";
    if (strCode == "B9") return "Regal Blue Metallic";
    if (strCode == "E5") return "Red";
    if (strCode == "E7") return "Burnished Red Metallic (Chrysler, Imperial)";
    if (strCode == "F1") return "Mist Green";
    if (strCode == "F3") return "Fiesta Green Metallic (Dodge), Amber Sherwood Metallic (Plymouth, Chrysler, Imperial)";
    if (strCode == "F5") return "Bright Yellow Green Metallic (Dodge)";
    if (strCode == "F7") return "Sherwood Green Metallic";
    if (strCode == "F8") return "Forest Green Metallic";
    if (strCode == "K6") return "Autumn Bronze Metallic (Chrysler, Imperial)";
    if (strCode == "L4") return "Summer Sand (Dodge), Sahara Beige (Plymouth, Chrysler, Imperial)";
    if (strCode == "Q5") return "Turquoise Metallic (Dodge), Coral Turqouise Metallic (Plymouth, Chrysler, Imperial)";
    if (strCode == "T6") return "Doeskin Metallic (Dodge), Mojave Tan Metallic (Plymouth)";
    if (strCode == "T8") return "Dark Tan Metallic (Dodge), Chestnut Metallic (Plymouth, Chrysler, Imperial)";
    if (strCode == "V2") return "Hemi Orange (Dodge), Tor-Red (Plymouth)";
    if (strCode == "W1") return "Dower White (Dodge), Spinnaker White (Plymouth, Chrysler, Imperial)";
    if (strCode == "X9") return "Black Diamond (Dodge), Formal Black (Plymouth, Chrysler, Imperial)";
    if (strCode == "Y1") return "Banana (Dodge), Lemon Twist (Plymouth)";
    if (strCode == "Y2") return "Sunfire Yellow";
    if (strCode == "Y3") return "Honey Gold";
    if (strCode == "Y4") return "Gold (Dodge), Honeydew (Plymouth, Chrysler, Imperial)";
    if (strCode == "Y6") return "Golden Haze Metallic";
    if (strCode == "Y8") return "Gold Metallic (Dodge), Gold Leaf Metallic (Plymouth, Chrysler, Imperial)";
    if (strCode == "Y9") return "Dark Gold Metallic (Dodge), Tawney Gold Poly (Plymouth, Chrysler, Imperial)";
	if (strCode == "99") return "Special Order";
	return "Unknown";
}


function ExtColor1973(strCode)
{
	// 1973 colors (dodge)
    if (strCode == "A5") return "Dark Silver Metallic (Dodge)";
    if (strCode == "B1") return "Light Blue (Dodge)";
    if (strCode == "B3") return "Blue Streak (Dodge)";
    if (strCode == "B5") return "Bright Blue Metallic (Dodge)";
    if (strCode == "B9") return "Dark Blue Metallic (Dodge)";
    if (strCode == "E5") return "Bright Red (Dodge)";
    if (strCode == "F1") return "Pale Green (Dodge)";
    if (strCode == "F3") return "Light Green Metallic (Dodge)";
    if (strCode == "F5") return "Bright Yellow Green Metallic (Dodge)";
    if (strCode == "F8") return "Dark Green Metallic (Dodge)";
    if (strCode == "K6") return "Bronze Metallic (Dodge)";
    if (strCode == "L4") return "Parchment (Dodge)";
    if (strCode == "L6") return "Aztec Gold Metallic (Dodge)";
    if (strCode == "Q5") return "Turquoise Metallic (Dodge)";
    if (strCode == "T6") return "Medium Tan Metallic (Dodge)";
    if (strCode == "T8") return "Dark Tan Metallic (Dodge)";
    if (strCode == "W1") return "Eggshell White (Dodge)";
    if (strCode == "X9") return "Black Diamond (Dodge)";
    if (strCode == "Y1") return "Top Banana (Dodge)";
    if (strCode == "Y2") return "Yellow (Dodge)";
    if (strCode == "Y3") return "Light Gold (Dodge)";
    if (strCode == "Y6") return "Gold Metallic (Dodge)";
    if (strCode == "Y9") return "Dark Gold Metallic (Dodge)";
	if (strCode == "99") return "Special Order";
	return "Unknown";
}

function ExtColor1974(strCode)
{
	// 1974 colors (dodge)
    if (strCode == "A5") return "Dark Silver Metallic (Dodge)";
    if (strCode == "B1") return "Powder Blue (Dodge)";
    if (strCode == "B5") return "Lucerne Blue Metallic (Dodge)";
    if (strCode == "B8") return "Starlight Blue Metallic (Dodge)";
    if (strCode == "E5") return "Bright Red (Dodge)";
    if (strCode == "E7") return "Burnished Red Metallic (Dodge)";
    if (strCode == "G2") return "Frosty Green Metallic (Dodge)";
    if (strCode == "G8") return "Deep Sherwood Metallic (Dodge)";
    if (strCode == "J6") return "Avocado Gold Metallic (Dodge)";
    if (strCode == "L4") return "Parchment (Dodge)";
    if (strCode == "L6") return "Aztec Gold Metallic (Dodge)";
    if (strCode == "L8") return "Dark Moonstone Metallic (Dodge)";
    if (strCode == "T5") return "Sienna Metallic (Dodge)";
    if (strCode == "T8") return "Dark Chestnut Metallic (Dodge)";
    if (strCode == "W1") return "Eggshell White (Dodge)";
    if (strCode == "X9") return "Black (Dodge)";
    if (strCode == "Y2") return "Yellow (Dodge)";
    if (strCode == "Y4") return "Golden Fawn (Dodge)";
    if (strCode == "Y5") return "Yellow Blaze (Dodge)";
    if (strCode == "Y6") return "Gold Metallic (Dodge)";
    if (strCode == "Y9") return "Dark Gold Metallic (Dodge)";
	if (strCode == "99") return "Special Order";
	return "Unknown";
}


function ExtColor1975(strCode)
{
	// 1975 colors (dodge)
    if (strCode == "A2") return "Silver Cloud Metallic (Dodge)";
    if (strCode == "A5") return "Silver Frost Metallic (Dodge)";
    if (strCode == "B1") return "Powder Blue (Dodge)";
    if (strCode == "B2") return "Astral Blue Metallic (Dodge)";
    if (strCode == "B5") return "Lucerne Blue Metallic (Dodge)";
    if (strCode == "B8") return "Starlight Blue Metallic (Dodge)";
    if (strCode == "E5") return "Bright Red (Dodge)";
    if (strCode == "E9") return "Vintage Red Metallic (Dodge)";
    if (strCode == "G2") return "Frosty Green Metallic (Dodge)";
    if (strCode == "G8") return "Deep Sherwood Metallic (Dodge)";
    if (strCode == "J2") return "Platinum Metallic (Dodge)";
    if (strCode == "J6") return "Avocado Gold Metallic (Dodge)";
    if (strCode == "K3") return "Bittersweet Metallic (Dodge)";
    if (strCode == "L4") return "Parchment (Dodge)";
    if (strCode == "L5") return "Moondust Metallic (Dodge)";
    if (strCode == "L6") return "Aztec Gold Metallic (Dodge)";
    if (strCode == "R6") return "Claret Red (Dodge)";
    if (strCode == "T4") return "Cinnamon Metallic (Dodge)";
    if (strCode == "T5") return "Sienna Metallic (Dodge)";
    if (strCode == "T9") return "Dark Chestnut Metallic (Dodge)";
    if (strCode == "W1") return "Eggshell White (Dodge)";
    if (strCode == "Y4") return "Golden Fawn (Dodge)";
    if (strCode == "Y5") return "Yellow Blaze (Dodge)";
    if (strCode == "Y6") return "Inca Gold Metallic (Dodge)";
    if (strCode == "Y9") return "Spanish Gold Metallic (Dodge)";
	if (strCode == "99") return "Special Order";
	return "Unknown";
}


function AddExtColor(strCode, strYear)
{
	var color = strCode + ": \t";
    var colorcode = strCode;
    if (strCode.length == 3)
    {
        colorcode = strCode.substring(1, 3);
    }
    
	if (strYear == "9") color += ExtColor1969(colorcode);
	else if (strYear == "0") color += ExtColor1970(colorcode);
	else if (strYear == "1") color += ExtColor1971(colorcode);
	else if (strYear == "2") color += ExtColor1972(colorcode);
	else if (strYear == "3") color += ExtColor1973(colorcode);
	else if (strYear == "4") color += ExtColor1974(colorcode);
	else if (strYear == "5") color += ExtColor1975(colorcode);
	
	return color + " Exterior Color\n";
}


function AddIntColor(strCode, strYear)
{
	var interior = strCode + ": \tTrim - ";
	
	if (strCode.charAt(0) == 'A') interior += "Basic, ";
	else if (strCode.charAt(0) == 'B') interior += "Basic, ";
	else if (strCode.charAt(0) == 'C') interior += "Charger, ";
    else if (strCode.charAt(0) == 'D') interior += "Luxury, ";
	else if (strCode.charAt(0) == 'F') interior += "Luxury, ";
	else if (strCode.charAt(0) == 'L') interior += "Low, ";
	else if (strCode.charAt(0) == 'H') interior += "High, ";
	else if (strCode.charAt(0) == 'P') interior += "Premium, ";
	else if (strCode.charAt(0) == 'M') interior += "Opt. Decor Group, ";
	else if (strCode.charAt(0) == 'W') interior += "W, ";
	else interior += "Unknown, ";

	if (strCode.charAt(1) == '2') interior += "Vinyl Bench Seat, ";
	else if (strCode.charAt(1) == '3') interior += "Cloth/Vinyl Bench Seat, ";
	else if (strCode.charAt(1) == '4') interior += "Vinyl Split Bench Seat, ";
	else if (strCode.charAt(1) == '5') interior += "Cloth/Vinyl Bucket Seats, ";
	else if (strCode.charAt(1) == '6') interior += "Vinyl Bucket Seats, ";
	else if (strCode.charAt(1) == 'R') interior += "Leather Bucket Seats, ";
	else interior += "Unknown, ";
	
	if (strCode.length == 3)
	{
	    // 1969 codes
	    if (strCode.charAt(2) == 'X') interior += "Black";
	    else if (strCode.charAt(2) == 'B') interior += "Blue";
	    else if (strCode.charAt(2) == 'D') interior += "Blue";
	    else if (strCode.charAt(2) == 'G') interior += "Green";
	    else if (strCode.charAt(2) == 'W') interior += "White/Black";
	    else if (strCode.charAt(2) == 'V') interior += "White/Red";
	    else if (strCode.charAt(2) == 'C') interior += "White/Blue";
        else if (strCode.charAt(2) == 'F') interior += "White/Green";
	    else if (strCode.charAt(2) == 'R') interior += "Red";
	    else if (strCode.charAt(2) == 'S') interior += "Pewter/Black";
	    else if (strCode.charAt(2) == 'U') interior += "Tan/Black";
	    else if (strCode.charAt(2) == 'H') interior += "White/Tan";
	    else if (strCode.charAt(2) == 'P') interior += "Yellow/Black";
	    else if (strCode.charAt(2) == 'T') interior += "Tan";
	    else if (strCode.charAt(2) == 'J') interior += "Floral Yellow/Green";
	    else interior += "Unknown Color";
	}
	else
	{
	    // 1970 -> codes
	    if (strCode.charAt(2) == 'X' && strCode.charAt(3) == '9') interior += "Black";
	    else if (strCode.charAt(2) == 'X' && strCode.charAt(3) == 'A') interior += "Charcoal/Black";
	    else if (strCode.charAt(2) == 'X' && strCode.charAt(3) == 'W') interior += "Black/White";
	    else if (strCode.charAt(2) == 'X' && strCode.charAt(3) == 'X') interior += "White/Black";
	    else if (strCode.charAt(2) == 'X' && strCode.charAt(3) == 'Y') interior += "Gold/Black";
	    else if (strCode.charAt(2) == 'X' && strCode.charAt(3) == 'V') interior += "Orange/Black";
	    else if (strCode.charAt(2) == 'T' && strCode.charAt(3) == '5') interior += "Tan";
	    else if (strCode.charAt(2) == 'T' && strCode.charAt(3) == '7') interior += "Chestnut";
	    else if (strCode.charAt(2) == 'F' && strCode.charAt(3) == '6') interior += "Green";
	    else if (strCode.charAt(2) == 'F' && strCode.charAt(3) == '7') interior += "Green";
	    else if (strCode.charAt(2) == 'F' && strCode.charAt(3) == '8') interior += "Green";
	    else if (strCode.charAt(2) == 'F' && strCode.charAt(3) == 'W') interior += "White/Green";
	    else if (strCode.charAt(2) == 'B' && strCode.charAt(3) == '5') interior += "Blue";
	    else if (strCode.charAt(2) == 'B' && strCode.charAt(3) == '6') interior += "Blue";
        else if (strCode.charAt(2) == 'B' && strCode.charAt(3) == '7') interior += "Blue";
	    else if (strCode.charAt(2) == 'B' && strCode.charAt(3) == 'W') interior += "White/Blue";
	    else if (strCode.charAt(2) == 'G' && strCode.charAt(3) == '6') interior += "Green";
	    else if (strCode.charAt(2) == 'G' && strCode.charAt(3) == '8') interior += "Green";
	    else if (strCode.charAt(2) == 'K' && strCode.charAt(3) == '4') interior += "Burnt Orange";
	    else if (strCode.charAt(2) == 'K' && strCode.charAt(3) == 'W') interior += "White/Burnt Orange";
	    else if (strCode.charAt(2) == 'L' && strCode.charAt(3) == '3') interior += "Parchment";
	    else if (strCode.charAt(2) == 'A' && strCode.charAt(3) == '8') interior += "Black Frost";
	    else if (strCode.charAt(2) == 'E' && strCode.charAt(3) == '4') interior += "Red";
	    else if (strCode.charAt(2) == 'E' && strCode.charAt(3) == 'W') interior += "White/Red";
	    else if (strCode.charAt(2) == 'Y' && strCode.charAt(3) == '3') interior += "Gold";
	    else if (strCode.charAt(2) == 'Y' && strCode.charAt(3) == '4') interior += "Gold/Black";
	    else interior += "Unknown Color";
	}
	
	interior += "\n";
	return interior;
}


function AddUpperDoorColor(strCode, strYear)
{
	if (strCode == "000") return strCode + ": \tFull Door Panels\n";

	var color = strCode + ": \t";
    var colorcode = strCode;
    if (strCode.length == 3)
    {
        colorcode = strCode.substring(1, 3);
    }

	if (strYear == "9") color += ExtColor1969(colorcode);
	else if (strYear == "0") color += ExtColor1970(colorcode);
	else if (strYear == "1") color += ExtColor1971(colorcode);
	else if (strYear == "2") color += ExtColor1972(colorcode);
	else if (strYear == "3") color += ExtColor1973(colorcode);
	else if (strYear == "4") color += ExtColor1974(colorcode);
	else if (strYear == "5") color += ExtColor1975(colorcode);
	
	return color + " Int. Door Frames\n";
}


function AddCode(strCode, strYear)
{
	if (strCode.length == 0)
	{
		return "";
	}
	
if (strCode == "26") return strCode + ": \t26in Radiator\n";

if (strCode == "A01") return strCode + ": \tLight Package\n";
if (strCode == "A02") return strCode + ": \tDriver Aid Group\n";
if (strCode == "A03") return strCode + ": \tTown & Country Group\n";
if (strCode == "A03") return strCode + ": \tDeluxe Light Package\n";
if (strCode == "A04") return strCode + ": \tBasic (Radio) Group\n";
if (strCode == "A05") return strCode + ": \tProtection Group\n";
if (strCode == "A06") return strCode + ": 69 Only \tSport or A/C Group\n";
if (strCode == "A07") return strCode + ": \tTurnpike Package\n";
if (strCode == "A08") return strCode + ": 69 Only \tWagon Easy Entry Convenience Group\n";
if (strCode == "A09") return strCode + ": \tConcealed Headlamp Package\n";
if (strCode == "A11") return strCode + ": 69 only \tSpecial Model XX29 Charger Daytona or 500\n";
if (strCode == "A12") return strCode + ": 69 only \t440 Six Pack Engine Package\n";
if (strCode == "A12") return strCode + ": 70 only \tChrysler 300 Hurst\n";
if (strCode == "A13") return strCode + ": 70 only \tPlymouth Road Runner Superbird\n";
if (strCode == "A13") return strCode + ": 69 only \t440-4bbl Engine Package\n";
if (strCode == "A14") return strCode + ": 69 only \tChrysler/Plymouth Spring Special w/ vinyl top\n";
if (strCode == "A14") return strCode + ": \tSpring Special Package\n";
if (strCode == "A15") return strCode + ": 69 only \tChrysler/Plymouth Spring Special wo/ vinyl top\n";
if (strCode == "A20") return strCode + ": 69 only \tDodge Fever Special Package\n";
if (strCode == "A21") return strCode + ": \tElastomeric Colored Front Bumper Package\n";
if (strCode == "A22") return strCode + ": \tElastomeric Colored Front & Rear Bumper Package\n";
if (strCode == "A24") return strCode + ": \tTrunk & Spare Tire Dress-up\n";
if (strCode == "A28") return strCode + ": \tNoise Reduction Package\n";
if (strCode == "A31") return strCode + ": \tHigh Performance Axle Package  w/3.91 Ratio\n";
if (strCode == "A32") return strCode + ": \tSuper Performance Axle Package  w/4.10 Ratio\n";
if (strCode == "A33") return strCode + ": \tTrack Pak w/3.54 ratio\n";
if (strCode == "A34") return strCode + ": \tSuper Track Pak w/4.10 ratio\n";
if (strCode == "A35") return strCode + ": \tH .D. Trailer Towing Package\n";
if (strCode == "A36") return strCode + ": \tPerformance Axle Package w/3.55 Ratio\n";
if (strCode == "A37") return strCode + ": \tTaxi Package\n";
if (strCode == "A38") return strCode + ": \tPolice Package\n";
if (strCode == "A39") return strCode + ": 69 only \tDodge Spring Special A\n";
if (strCode == "A40") return strCode + ": 69 only \tDodge Spring Special B\n";
if (strCode == "A41") return strCode + ": 69 only \tWhite Hat Special w/vinyl roof\n";
if (strCode == "A42") return strCode + ": 69 only \tDart Spring Special Package A\n";
if (strCode == "A43") return strCode + ": 69 only \tDart Spring Special Package B\n";
if (strCode == "A44") return strCode + ": \tRear Window Louver Package\n";
if (strCode == "A45") return strCode + ": \tFront & Rear Spoiler Package\n";
if (strCode == "A46") return strCode + ": \tMoulding Package\n";
if (strCode == "A47") return strCode + ": \tSpecial Edition Package\n";
if (strCode == "A47") return strCode + ": 69 only \tSpecial Dress-up Group I\n";
if (strCode == "A48") return strCode + ": \tDress  Up Package\n";
if (strCode == "A49") return strCode + ": 69 only \tSpecial Dress-up Group II\n";
if (strCode == "A51") return strCode + ": 70 only \tSport Fury S-23\n";
if (strCode == "A51") return strCode + ": \tDuster Twister Package\n";
if (strCode == "A52") return strCode + ": \tSport Fury GT\n";
if (strCode == "A53") return strCode + ": \tTrans Am Package\n";
if (strCode == "A53") return strCode + ": 69 only \tFormula S Package\n";
if (strCode == "A54") return strCode + ": \tColored Bumper Package\n";
if (strCode == "A55") return strCode + ": 69 only \tBlack Vinyl Trim Group\n";
if (strCode == "A55") return strCode + ": \tCustom Trim Package\n";
if (strCode == "A56") return strCode + ": 69 only \t'Cuda 340 Package\n";
if (strCode == "A57")
{
    if (strYear == "9") return strCode + ": 69 only \t'Cuda 383 Package\n";
    else if (strYear == "0")  return strCode + ": 69 only \t'Cuda 383 Package\n";
    else if (strYear == "1")  return strCode + ": 69 only \t'Cuda 383 Package\n";
    else   return strCode + ": 72-74 \tRallye Package\n";
 }
if (strCode == "A58") return strCode + ": 69 only \tSport Grain Group\n";
if (strCode == "A59") return strCode + ": \tSizzler Package\n";
if (strCode == "A60") return strCode + ": \t4-Speed Transmission Special Package\n";
if (strCode == "A61") return strCode + ": \tAutomatic Transmission Special Package\n";
if (strCode == "A62") return strCode + ": \tRallye Instrument Cluster Package\n";
if (strCode == "A63") return strCode + ": 70 only \tChallenger Moulding Group\n";
if (strCode == "A65") return strCode + ": \tDart GT Package\n";
if (strCode == "A66") return strCode + ": 70 only \tChallenger 340 Performance Package\n";
if (strCode == "A67") return strCode + ": \tBacklight Louver Package\n";
if (strCode == "A73") return strCode + ": 70 only \tSpecial Value Package - XH29 Charger\n";
if (strCode == "A76") return strCode + ": Monaco Brougham Package\n";
if (strCode == "A78") return strCode + ": 69 only \tWestern Sport Special Package\n";
if (strCode == "A78") return strCode + ": \tFormal Roof Package\n";
if (strCode == "A82") return strCode + ": 68-71 \tPolice Ornamentation Group\n";
if (strCode == "A83") return strCode + ": \tNew York Taxi Package\n";
if (strCode == "A85") return strCode + ": 69 only \tFront End Ornamentation Group\n";
if (strCode == "A85") return strCode + ": \tCharger Topper Group\n";
if (strCode == "A86") return strCode + ": 69 only \tInterior Decor Group\n";
if (strCode == "A87") return strCode + ": \tRoad Runner Decor Package\n";
if (strCode == "A88") return strCode + ": \tInterior Decor Group\n";
if (strCode == "A91") return strCode + ": 70 only \tWestern Sport Special\n";
if (strCode == "A93") return strCode + ": \tB & E Body Coupe Package\n";
if (strCode == "A94") return strCode + ": \tGold Duster Special Package\n";
if (strCode == "A94") return strCode + ": \tReminder Light Package\n";
if (strCode == "A95") return strCode + ": \tChrysler Spring Special\n";
if (strCode == "A97") return strCode + ": \tSpecial Package\n";
if (strCode == "A97") return strCode + ": 70 only \tFury Spring Special A\n";
if (strCode == "A98") return strCode + ": 70 only \tFury Spring Special B\n";
if (strCode == "A99") return strCode + ": \tSpecial Coupe Package\n";
if (strCode == "B11") return strCode + ": \tH.D. Drum Brakes 10in - Auto Adj. (A-Body)\n";
if (strCode == "B11") return strCode + ": \tH.D. Drum Brakes 11in - Auto Adj. (B+C+E Body)\n";
if (strCode == "B31") return strCode + ": \tH.D. Drum Brakes 11in - Manual Adj. (B+C Body)\n";
if (strCode == "B39") return strCode + ": 69 only \tH.D. Metallic Brake Lining\n";
if (strCode == "B41") return strCode + ": \tFront Disc Brakes w/Standard 10in RR Drum\n";
if (strCode == "B42") return strCode + ": 70 only \tFront Disc Brakes w/H.D. 11in RR Drum\n";
if (strCode == "B43") return strCode + ": Manual Brakes\n";

if (strCode == "B51") return strCode + ": \tPower Brakes\n";
if (strCode == "B61") return strCode + ": \tBrakes - Standard Drum\n";
if (strCode == "B64") return strCode + ": \t4-Wheel Skid Control\n";
if (strCode == "CO4") return strCode + ": \tSeat Belts - Delete All Standard\n";
if (strCode == "C13") return strCode + ": \tFront Shoulder Belts\n";
if (strCode == "C14") return strCode + ": \tRear Shoulder Belts\n";
if (strCode == "C15") return strCode + ": 70 only \tDeluxe Seat Belts\n";
if (strCode == "C16") return strCode + ": \tConsole w/Woodgrain Panel\n";
if (strCode == "C21") return strCode + ": \tCenter Front Seat Cushion\n";
if (strCode == "C22") return strCode + ": \tArmrest Base-Painted\n";
if (strCode == "C23") return strCode + ": \tRear Armrests w/ashtray\n";
if (strCode == "C25") return strCode + ": 69 only \tLeft Head Restraint\n";
if (strCode == "C26") return strCode + ": \tConsolette w/Formed Headlining\n";
if (strCode == "C28") return strCode + ": 69 only \tRight Head Restraint\n";
if (strCode == "C31") return strCode + ": 69 only \tLeft & Right Head Restraints\n";
if (strCode == "C32") return strCode + ": \tDelete Head Restraints\n";
if (strCode == "C34") return strCode + ": \tFront Seat Shield\n";
if (strCode == "C37D")return strCode + ": 70 only \tRichard Petty Blue (Special Order Paint)\n";
if (strCode == "C51") return strCode + ": \tBench Seat-Split 50/50\n";
if (strCode == "C52") return strCode + ": \tBench Seat\n";
if (strCode == "C55") return strCode + ": \tBucket Seats\n";
if (strCode == "C56") return strCode + ": \tBucket Seats\n";
if (strCode == "C61") return strCode + ": \tBucket Seat Left Reclining\n";
if (strCode == "C62") return strCode + ": \tLeft-hand 6 way Adjustable Bucket Seat\n";
if (strCode == "C65") return strCode + ": \tAir Foam Front Seat\n";
if (strCode == "C71") return strCode + ": \tAir Foam Front & Rear Seat\n";
if (strCode == "C73") return strCode + ": 69 only \tFold Down Rear Seat\n";
if (strCode == "C81") return strCode + ": \tSeat Spring - H.D. Front\n";
if (strCode == "C83") return strCode + ": \tSeat Spring - H.D. Rear\n";
if (strCode == "C85") return strCode + ": \tSeat Spring - H.D. Front & Rear\n";
if (strCode == "C91") return strCode + ": \tFloor Mats - H.D. Front\n";
if (strCode == "C92") return strCode + ": \tFloor Mats - Accessory Rubber\n";
if (strCode == "C93") return strCode + ": \tCarpet\n";
if (strCode == "C94") return strCode + ": 69 only \tFloor Mats Colored Keyed\n";
if (strCode == "C95") return strCode + ": \tFloor Mats - H.D. Front & Rear Black\n";
if (strCode == "C96") return strCode + ": \tTrunk Dress-Up Partial\n";
if (strCode == "C97") return strCode + ": \tTrunk Dress-Up\n";
if (strCode == "CT") return strCode +  ": \tCodes Continued on 2nd Fender Tag\n";
if (strCode == "CTD") return strCode + ": \tCodes Continued on 2nd Fender Tag\n";
if (strCode == "D11") return strCode + ": \t3 Speed Manual Transmission-Column Shift 6 Cyl.\n";
if (strCode == "D12") return strCode + ": \t3 Speed Manual Transmission-Column Shift 8 Cyl.\n";
if (strCode == "D13") return strCode + ": \t3 Speed Manual Transmission-Floor Shift\n";
if (strCode == "D21") return strCode + ": \t4 Speed Manual Transmission\n";
if (strCode == "D31") return strCode + ": \tA904 3-Speed Auto Trans.\n";
if (strCode == "D32") return strCode + ": \tHeavy Duty Automatic Transmission\n";
if (strCode == "D34") return strCode + ": \tLight Duty Automatic Transmission\n";
if (strCode == "D36") return strCode + ": \tA727 3-Speed Automatic Transmission\n";
if (strCode == "D41") return strCode + ": \tClutch H.D. 9 1/2in Diameter\n";
if (strCode == "D49") return strCode + ": \tSpecial Order Transmission\n";
if (strCode == "D51") return strCode + ": \t2.76:1 Rear Axle Ratio\n";
if (strCode == "D53") return strCode + ": \t3.23:1 Rear Axle Ratio\n";
if (strCode == "D55") return strCode + ": \t2.45:1 Rear Axle Ratio\n";
if (strCode == "D56") return strCode + ": \t3.54:1 Rear Axle Ratio\n";
if (strCode == "D57") return strCode + ": \t3.91:1 Rear Axle Ratio\n";
if (strCode == "D58") return strCode + ": \t4.10:1 Rear Axle Ratio\n";
if (strCode == "D69") return strCode + ": \tSpecial Order Rear Axle\n";
if (strCode == "D91") return strCode + ": \tSure Grip Axle\n";
if (strCode == "E11") return strCode + ": 69 only \t170 cid 1 barrel 6 Cylinder 115hp\n";
if (strCode == "E22") return strCode + ": \t198 cid 1 barrel 6 Cylinder 125hp\n";
if (strCode == "E24") return strCode + ": \t225 cid 1 barrel 6 Cylinder 145hp\n";
if (strCode == "E25") return strCode + ": \t225 cid 1 barrel 6 Cylinder H.D. 145hp\n";
if (strCode == "E31") return strCode + ": 69 only \t273 cid 2 barrel V8 190hp\n";
if (strCode == "E44") return strCode + ": \t318 cid 2 barrel V8 230hp\n";
if (strCode == "E55")
{
	var strEngine = document.TAGDecodedForm.code2.value.substring(0,1);
	if (strYear == "0" && strEngine == "J")
	{
		return strCode + ": \t340 cid 3x2 barrel V8 290hp\n";
	}
	else
	{
		return strCode + ": \t340 cid 4 barrel V8 275hp\n";
	}
}

if (strCode == "E57") return strCode + ": \t360 cid 2 barrel V8 255hp\n";
if (strCode == "E58") return strCode + ": \t360 cid 4 barrel V8 245hp\n";
if (strCode == "E61") return strCode + ": \t383 cid 2 barrel V8 290hp\n";
if (strCode == "E61") return strCode + ": \t383 cid 2 barrel V8 275hp\n";
if (strCode == "E63")
{
    if (strYear == "9" || strYear == "0" || strYear == "1") return strCode + ": \t383 cid 4 barrel V8 High Performance\n";
    else return strCode + ": \t400 cid 2 barrel V8 190hp\n";
}
if (strCode == "E64") return strCode + ": \t400 cid 4 barrel V8\n";
if (strCode == "E65") return strCode + ": \t383 cid 4 barrel V8 300hp\n";
if (strCode == "E68") return strCode + ": \t400 cid 4 barrel V8 High Performance\n";
if (strCode == "E74") return strCode + ": \t426 Hemi 2x4 barrel V8 425hp\n";
if (strCode == "E85") return strCode + ": \t440 cid 4 barrel V8 350hp\n";
if (strCode == "E86") return strCode + ": \t440 cid 4 barrel V8 (High Performance) 375hp\n";
if (strCode == "E87") return strCode + ": \t440 cid 3x2 barrel V8  (High Performance) 390hp\n";
if (strCode == "E91") return strCode + ": \tPolice Engine\n";
if (strCode == "END") return strCode + ": \tEnd of Sales Codes\n";
if (strCode == "EN1") return strCode + ": \tEnd of Sales Codes\n";
if (strCode == "EN2") return strCode + ": \tEnd of Sales Codes\n";

if (strCode == "F01") return strCode + ": 70 only \t440 cid 4 barrel police engine conversion package\n";
if (strCode == "F08") return strCode + ": \tTrans Am Engine\n";
if (strCode == "F11") return strCode + ": \t46 Amp Alternator (std with AC)\n";
if (strCode == "F11") return strCode + ": \t50 Amp Alternator\n";
if (strCode == "F13") return strCode + ": \t60 Amp Alternator\n";
if (strCode == "F15") return strCode + ": \t65 Amp Alternator\n";
if (strCode == "F17") return strCode + ": \tRadio Suppressor Package\n";
if (strCode == "F22") return strCode + ": \tBattery 46 Amp Hour (Series 24 w/Green Caps)\n";
if (strCode == "F23") return strCode + ": \tBattery 59 Amp Hour (Series 24 w/Yellow Caps)\n";
if (strCode == "F25") return strCode + ": \tBattery 70 Amp Hour (Series 27 w/Red Caps)\n";
if (strCode == "F56") return strCode + ": \tAntifreeze Tested -35º F\n";
if (strCode == "F95") return strCode + ": \tCertified Speedometer\n";
if (strCode == "F96") return strCode + ": \tOil Pressure Gauge\n";
if (strCode == "G01") return strCode + ": \tHeated Rear Window Defogger\n";
if (strCode == "G11") return strCode + ": \tTinted Glass (all)\n";
if (strCode == "G12") return strCode + ": \tTinted side glass\n";
if (strCode == "G15") return strCode + ": \tTinted Windshield\n";
if (strCode == "G18") return strCode + ": \tClear windshield (with ac)\n";
if (strCode == "G21") return strCode + ": \tClear Glass (with ac)\n";
if (strCode == "G24") return strCode + ": \tOmit Vent Windows\n";
if (strCode == "G25") return strCode + ": \tAdd Vent Windows\n";
if (strCode == "G25") return strCode + ": \tManual Vent Wing\n";
if (strCode == "G30") return strCode + ": \tDelete mirrors\n";
if (strCode == "G31") return strCode + ": \tOS RH Manual Standard Mirror\n";
if (strCode == "G32") return strCode + ": \tOS RH Manual Racing Mirror\n";
if (strCode == "G33") return strCode + ": \tLH Remote Racing Mirror\n";
if (strCode == "G34") return strCode + ": \tOS LH Remote Racing Mirror\n";
if (strCode == "G35") return strCode + ": \tDelete Standard Outside Mirror\n";
if (strCode == "G36") return strCode + ": \tOS Dual Racing Mirrors\n";
if (strCode == "G37") return strCode + ": \tOS Dual Racing Mirrors\n";
if (strCode == "G41") return strCode + ": \tDay/Night Inside Rear-View Mirror\n";
if (strCode == "G42") return strCode + ": \tNon Day/Night Inside Rear-view Mirror\n";
if (strCode == "G54") return strCode + ": \tOutside LH Remote Chrome Racing Mirror\n";
if (strCode == "G55") return strCode + ": \tOutside LH Remote Painted Racing Mirror\n";
if (strCode == "G64") return strCode + ": \tOutside RH Manual Chrome Racing Mirror\n";
if (strCode == "G65") return strCode + ": \tOutside RH Manual Painted Racing Mirror\n";
if (strCode == "G74") return strCode + ": \tDual Chrome Racing Mirrors\n";
if (strCode == "G75") return strCode + ": \tDual Painted Racing Mirrors\n";

if (strCode == "H11") return strCode + ": \tHeater\n";
if (strCode == "H25") return strCode + ": \tHeater Delete\n";
if (strCode == "H31") return strCode + ": \tRear Window Defogger\n";
if (strCode == "H41") return strCode + ": \tHeater w/ Upper Level Vent\n";
if (strCode == "H51") return strCode + ": \tAir Conditioning with Heater\n";
if (strCode == "J01") return strCode + ": \tDriver Education Decal\n";
if (strCode == "J11") return strCode + ": \tGlove Box Lock\n";
if (strCode == "J14") return strCode + ": \tDelete Cigar Lighter\n";
if (strCode == "J15") return strCode + ": \tCigar Lighter\n";
if (strCode == "J21") return strCode + ": \tElectric Clock\n";
if (strCode == "J24") return strCode + ": \tHeadlamp Washer\n";
if (strCode == "J25") return strCode + ": \t3 Speed Wipers\n";
if (strCode == "J26") return strCode + ": \tTailgate Window Wiper/Washer\n";
if (strCode == "J31") return strCode + ": \tDual Horns\n";
if (strCode == "J32") return strCode + ": \tSingle Horn\n";
if (strCode == "J41") return strCode + ": \tPedal Dress Up\n";
if (strCode == "J45") return strCode + ": \tHood Tie Down Pins\n";
if (strCode == "J46") return strCode + ": \tLocking Gas cap\n";
if (strCode == "J52") return strCode + ": \tInside Hood Release\n";
if (strCode == "J54") return strCode + ": \tSport Hood\n";
if (strCode == "J55") return strCode + ": \tUndercoating with Hood Pad\n";
if (strCode == "J64") return strCode + ": \tInstrument Panel Woodgrain\n";
if (strCode == "J68") return strCode + ": \tBacklight Louvers\n";
if (strCode == "J78") return strCode + ": \tFront Spoiler\n";
if (strCode == "J81") return strCode + ": \tRear Spoiler - Wing Type\n";
if (strCode == "J82") return strCode + ": \tRear Spoiler - Duck Wing\n";
if (strCode == "L05") return strCode + ": \tMap Light\n";
if (strCode == "L06") return strCode + ": \tDome/Reading Lamp\n";
if (strCode == "L11") return strCode + ": \tGlove Box Light\n";
if (strCode == "L15") return strCode + ": \tAsh Receiver Lamp\n";
if (strCode == "L25") return strCode + ": \tTrunk Lamp\n";
if (strCode == "L31") return strCode + ": \tHood/Fender Mounted Turn Signals\n";
if (strCode == "L34") return strCode + ": \tRoad Lights\n";
if (strCode == "L35") return strCode + ": \tCornering Lamps\n";
if (strCode == "L37") return strCode + ": \tConcealed Headlamps\n";
if (strCode == "L42") return strCode + ": \tHeadlamp Time Delay\n";
if (strCode == "L61") return strCode + ": \tDome Lamp Switch Rear Doors\n";
if (strCode == "L65") return strCode + ": \tIgnition Switch Lamp  /with time delay\n";
if (strCode == "L68") return strCode + ": \tAuto Headlamp Dimmer\n";
if (strCode == "L71") return strCode + ": \tDoor Ajar Lamp\n";
if (strCode == "L72") return strCode + ": \tHeadlamp On Buzzer\n";
if (strCode == "L73") return strCode + ": \tSeatbelt Unfastened Lamp\n";
if (strCode == "L75") return strCode + ": \tLow Fuel Lamp\n";
if (strCode == "L76") return strCode + ": \tHeater Controls Lamp\n";
if (strCode == "M05") return strCode + ": \tDoor edge moldings\n";
if (strCode == "M08") return strCode + ": \tSimulated Louvers\n";
if (strCode == "M21") return strCode + ": \tRoof drip rail moldings\n";
if (strCode == "M25") return strCode + ": \tWide sill moldings\n";
if (strCode == "M26") return strCode + ": \tWheel Lip Moldings\n";
if (strCode == "M27") return strCode + ": \tDelete Wheel Lip Moldings\n";
if (strCode == "M28") return strCode + ": \tFront Bumper Periphery\n";
if (strCode == "M31") return strCode + ": \tBelt Moldings\n";
if (strCode == "M33") return strCode + ": \tBody Side Moldings\n";
if (strCode == "M36") return strCode + ": \tRear Bumper Periphery\n";
if (strCode == "M38") return strCode + ": \tDecklid Finish Panel Moldings\n";
if (strCode == "M41") return strCode + ": \tLicense Plate Frame\n";
if (strCode == "M42") return strCode + ": \tFront Stone Shield Moldings\n";
if (strCode == "M43") return strCode + ": \tGrille Trim Moldings\n";
if (strCode == "M44") return strCode + ": \tHood and Fender Moldings\n";
if (strCode == "M46") return strCode + ": \tSimulated ¼ Scoops\n";
if (strCode == "M47") return strCode + ": 69 only \tHood Scoops - Simulated\n";
if (strCode == "M51") return strCode + ": \tPower Sunroof w/Vinyl Roof\n";
if (strCode == "M71") return strCode + ": \tFront Colored Bumper\n";
if (strCode == "M72") return strCode + ": \tRear Colored Bumper\n";
if (strCode == "M73") return strCode + ": \tFront & Rear Colored Bumpers\n";
if (strCode == "M75") return strCode + ": \tRear Bumper Tape\n";
if (strCode == "M81") return strCode + ": \tFront Bumper Guards\n";
if (strCode == "M83") return strCode + ": \tRear Bumper Guards\n";
if (strCode == "M84") return strCode + ": \tTail Step Sill Plate\n";
if (strCode == "M85") return strCode + ": \tFront & Rear Bumper Guards\n";
if (strCode == "M88") return strCode + ": \tDecklid Moldings Treatment\n";
if (strCode == "M91") return strCode + ": \tLuggage Rack\n";
if (strCode == "M93") return strCode + ": \tBody Side Moldings Delete\n";
if (strCode == "N23") return strCode + ": \tElectronic Ignition System\n";
if (strCode == "N25") return strCode + ": \tEngine Block Heater\n";
if (strCode == "N31") return strCode + ": \tOptional Engine Compression Ratio\n";
if (strCode == "N41") return strCode + ": \tDual Exhaust\n";
if (strCode == "N42") return strCode + ": \tChrome Exhaust Tips\n";
//if (strCode == "N44") return strCode + ": 70 only \tSide Exhaust\n";
if (strCode == "N44") return strCode + ": \tSide Exhaust\n";
if (strCode == "N45") return strCode + ": \tHi Capacity Fan\n";
if (strCode == "N46") return strCode + ": \tMedium Capacity Fan\n";
if (strCode == "N51") return strCode + ": \tMaximum Engine Cooling\n";
if (strCode == "N65") return strCode + ": \t7 Blade Torque Drive Fan\n";
if (strCode == "N75") return strCode + ": \tAux. Transmission Fluid Cooler\n";
if (strCode == "N76") return strCode + ": \tCoolant Recovery System\n";
if (strCode == "N77") return strCode + ": \tAux. Vacuum Reservoir\n";
//if (strCode == "N78") return strCode + ": 68 only \tPerformance Gauge\n";
if (strCode == "N78") return strCode + ": \tPerformance Gauge\n";
if (strCode == "N81") return strCode + ": \tFast Idle Control\n";
if (strCode == "N85") return strCode + ": \tTachometer\n";
if (strCode == "N88") return strCode + ": \tAuto Speed Control\n";
if (strCode == "N94") return strCode + ": \tFiberglass Fresh Air Hood\n";
if (strCode == "N95") return strCode + ": \tEmissions Control\n";
if (strCode == "N96") return strCode + ": \tFresh Air Hood\n";
if (strCode == "N97") return strCode + ": \tNoise Reduction Package\n";
if (strCode == "N98") return strCode + ": \tExhaust Emissions Standards Label\n";

if (strCode == "P21") return strCode + ": \tPower Front Bench Seat\n";
if (strCode == "P25") return strCode + ": \tPower Left Front Seat\n";
if (strCode == "P28") return strCode + ": \tPower Left/Right Front Seat\n";
if (strCode == "P31") return strCode + ": \tPower Windows\n";
if (strCode == "P33") return strCode + ": \tPower Vent Windows\n";
if (strCode == "P35") return strCode + ": \tPower Tailgate Window\n";
if (strCode == "P37") return strCode + ": \tPower Convertible Top\n";
if (strCode == "P41") return strCode + ": \tPower Door Locks\n";
if (strCode == "P44") return strCode + ": \tPower Lock Tailgate\n";
if (strCode == "P45") return strCode + ": \tPower Deck Lid Release\n";
if (strCode == "R11") return strCode + ": \tRadio Solid State AM (2 Watts)\n";
if (strCode == "R13") return strCode + ": \tDeluxe AM Radio (5 1/2 Watts)\n";
//if (strCode == "R18") return strCode + ": 69 only \tSearch Tune AM Radio (5 1/2 Watts)\n";
if (strCode == "R18") return strCode + ": \tSearch Tune AM Radio (5 1/2 Watts)\n";
if (strCode == "R21") return strCode + ": \tAM/FM Radio (5 1/2 Watts)\n";
if (strCode == "R22") return strCode + ": \tAM Radio with 8 Track  (10 Watts)\n";
if (strCode == "R23") return strCode + ": \tSearch Tune AM/FM Radio (5 1/2 Watts)\n";
if (strCode == "R26") return strCode + ": \tAM Radio with Cassette\n";
if (strCode == "R31") return strCode + ": \tRear Seat Speaker(s)\n";
if (strCode == "R32") return strCode + ": \tDual Rear Speakers\n";
if (strCode == "R33") return strCode + ": \tMicrophone\n";
if (strCode == "R35") return strCode + ": \tAM/FM Stereo Radio  (10 Watts)\n";
if (strCode == "R36") return strCode + ": \tAM/FM Stereo with Cassette\n";
if (strCode == "R37") return strCode + ": \tAM/FM Stereo with 8 Track\n";
if (strCode == "R45") return strCode + ": \tOversize Manual Antenna\n";
if (strCode == "R48") return strCode + ": \tPower Antenna\n";
if (strCode == "S11") return strCode + ": \tSuspension H.D. without Sway Bar\n";
if (strCode == "S13") return strCode + ": \tSuspension H.D. with Sway Bar\n";
if (strCode == "S15") return strCode + ": \tHemi Suspension with Sway Bar\n";
if (strCode == "S16") return strCode + ": \tSuspension H.D. Police\n";
if (strCode == "S17") return strCode + ": \tReduced Rate Suspension\n";
if (strCode == "S21") return strCode + ": \tShocks H.D. 1in-Front / Monroe Load Levers Rear\n";
if (strCode == "S22") return strCode + ": \tShocks H.D. Monroe Front / Load Levers Rear\n";
if (strCode == "S25") return strCode + ": \tFirm Ride Shocks 1in Front & Rear\n";
if (strCode == "S28") return strCode + ": \tFirm Ride Shocks 1in Front  / 1 3/8in Rear\n";
if (strCode == "S31") return strCode + ": \tFront Sway Bar\n";
if (strCode == "S41") return strCode + ": \tRear Sway Bar\n";
if (strCode == "S61") return strCode + ": \tTilt/Telescopic Steering Column\n";
if (strCode == "S62") return strCode + ": \tTilt Steering Column\n";
if (strCode == "S74") return strCode + ": \tQuick Ratio Power Steering\n";
if (strCode == "S75") return strCode + ": 69 Only \tQuick Ration Manual Steering\n";
if (strCode == "S76") return strCode + ": \tSteering Wheel Horn Ring Full/Fleet\n";
if (strCode == "S77") return strCode + ": \tPower Steering\n";
if (strCode == "S78") return strCode + ": \tFull Horn Ring\n";
if (strCode == "S79") return strCode + ": \tLower ½ Horn Ring\n";

if (strCode == "S81") return strCode + ": \tPremium Steering Wheel Woodgrained\n";
if (strCode == "S81") return strCode + ": \tDeluxe Padded Steering Wheel (B-Body)\n";
if (strCode == "S83") return strCode + ": \tRim Blow Woodgrained Steering Wheel (Rim Blow)\n";
if (strCode == "S84") return strCode + ": \tTuff Steering Wheel\n";
if (strCode == "T34") return strCode + ": \tTires F78x14 White Side Wall\n";
if (strCode == "T82") return strCode + ": \tF70-15 White\n";
if (strCode == "T83") return strCode + ": \tF70-14 Red\n";
if (strCode == "T85") return strCode + ": \tF70-14 Red (Fiberglass Belted)\n";
if (strCode == "T86") return strCode + ": \tF70-14 White\n";
if (strCode == "T87") return strCode + ": \tF70-14 Raised White Letter\n";
if (strCode == "U")   return strCode + ": \tUSA Specifications\n";
if (strCode == "C")   return strCode + ": \tCanada Specifications\n";
if (strCode == "I")   return strCode + ": \tInternational (export) Specifications\n";
if (strCode == "U01") return strCode + ": \tE60-15 Raised White Letter (Front)\n";
if (strCode == "U01") return strCode + ": \tG60-15 Raised White Letter (Rear)\n";
if (strCode == "U64") return strCode + ": \tF70-15 White Stripe (Fiberglass belted)\n";
if (strCode == "U65") return strCode + ": \tF70-15 Red Stripe (Fiberglass belted)\n";
if (strCode == "U7S") return strCode + ": \tSpecial Order\n";
if (strCode == "U82") return strCode + ": \tE60-15 Raised White Letter Polyglass\n";
if (strCode == "U86") return strCode + ": \tG60-15 Raised White Letter Polyglass\n";
if (strCode == "V01") return strCode + ": \tMono Tone Paint Treatment\n";
if (strCode == "V02") return strCode + ": \tTwo Tone Paint Treatment\n";
if (strCode == "V05") return strCode + ": 69 Only \tPaint Buffed\n";
if (strCode == "V08") return strCode + ": \tPaint, Trim, and Vinyl Roof Edit Waiver\n";
if (strCode == "V09") return strCode + ": \tPaint Special Order\n";

if (strCode == "V21") return strCode + ": \tPerformance Hood Treatment\n";
if (strCode == "V22") return strCode + ": \tDelete Sport Hood Treatment\n";
if (strCode == "V23") return strCode + ": \tPaint - Delete Body Side\n";
if (strCode == "V24 ") return strCode + ": \tPerformance Hood Treatment w/CID\n";

if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '1')
{
    // vinyl tops
    return strCode + ": \tFull Vinyl Top, " + VinylTopColor(strCode.charAt(2), strYear) + "\n";
}
if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '3')
{
    // convertible tops
	if (strCode.charAt(2) == 'W') return strCode + ": \tWhite Convertible Top\n";
	if (strCode.charAt(2) == 'X') return strCode + ": \tBlack Convertible Top\n";
	if (strCode.charAt(2) == '9') return strCode + ": \tConvertible Top, Special Order\n";
}
if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '4')
{
	if (strYear == "0")
	{
	    // body stripes
	    if (strCode.charAt(2) == 'J') return strCode + ": \tLime Daylight Fluorescent Body Side Stripe\n";
	    if (strCode.charAt(2) == 'M') return strCode + ": \tPink Daylight Fluorescent Body Side Stripe\n";
	    if (strCode.charAt(2) == 'W') return strCode + ": \tWhite Body Side Stripe\n";
	    if (strCode.charAt(2) == 'X') return strCode + ": \tBlack Body Side Stripe\n";
	}
	else
	{
	    // vinyl canopy roof
	    return strCode + ": Vinyl Canopy Roof, " + VinylTopColor(strCode.charAt(2), strYear) + "\n";
	}
}


if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '5')
{
	// body side molding
	return strCode + ": \tBody Side Stripes, " + StripeColor(strCode.charAt(2), strYear) + "\n";
}


if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '6')
{
	// body side molding
	return strCode + ": \tLongitudinal Stripes, " + StripeColor(strCode.charAt(2), strYear) + "\n";
}


if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '7')
{
	// body side molding
	return strCode + ": \tAccent Stripes, " + StripeColor(strCode.charAt(2), strYear) + "\n";
}

if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '8')
{
	// body side molding
	return strCode + ": \tTranverse Stripes, " + StripeColor(strCode.charAt(2), strYear) + "\n";
}

if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '9' && strYear == "0")
{
	// body side molding
	return strCode + ": \tBumble Bee Stripes, " + StripeColor(strCode.charAt(2), strYear) + "\n";
}


if (strCode.charAt(0) == 'V' && strCode.charAt(1) == '9' && strYear == "1")
{
	// body side molding
	return strCode + ": \tLongitudinal Stripes, " + StripeColor(strCode.charAt(2), strYear) + "\n";
}


if (strCode == "W11") return strCode + ": \tDeluxe Wheel Covers\n";
if (strCode == "W13") return strCode + ": \tClass 2 Wheel Covers\n";
if (strCode == "W13") return strCode + ": 70 \tDeep Dish Wheel Covers\n";
if (strCode == "W13") return strCode + ": \tClass 2 Wheel Covers\n";
if (strCode == "W15") return strCode + ": \tDeep Dish Wheel Covers\n";
if (strCode == "W15") return strCode + ": \tWire Wheel Covers\n";
if (strCode == "W18") return strCode + ": \tSimulated Mag Wheel Covers\n";
if (strCode == "W21") return strCode + ": \tRoad Wheels\n";
if (strCode == "W21") return strCode + ": \tRallye Wheels\n";
if (strCode == "W23") return strCode + ": \tRoad Wheels\n";
if (strCode == "W34") return strCode + ": \tCollapsible Spare Tire\n";
if (strCode == "W55") return strCode + ": \tWheels Painted Body Color\n";
if (strCode == "Y05") return strCode + ": \tBuild to USA Specs\n";
if (strCode == "Y07") return strCode + ": \tBuild to Canada Specs\n";
if (strCode == "Y09") return strCode + ": \tBuild to Specs for Export\n";
if (strCode == "Y11") return strCode + ": \tDomestic Publications\n";
if (strCode == "Y13") return strCode + ": \tDealer Demo\n";
if (strCode == "Y14") return strCode + ": \tSold Car\n";
if (strCode == "Y15") return strCode + ": \tDirect Sale\n";
if (strCode == "Y16") return strCode + ": \tSales Bank\n";
if (strCode == "Y17") return strCode + ": \tCorporate Lease Car System\n";
if (strCode == "Y22") return strCode + ": \tCorporate Lease Car - Executive\n";
if (strCode == "Y28") return strCode + ": \tCompany Car/Public Relations\n";
if (strCode == "Y33") return strCode + ": \tFleet Sales\n";
if (strCode == "Y37") return strCode + ": \tOutside Modification Vendor (Sunroof)\n";
if (strCode == "Y39") return strCode + ": \tSpecial Order\n";
if (strCode == "Y54") return strCode + ": \tChrysler Management Employee Purchase\n";
if (strCode == "Y91") return strCode + ": \tShow Car Finish A / Less Gas\n";
if (strCode == "Y92") return strCode + ": \tShow Car Finish B / Less Gas\n";
if (strCode == "Y93") return strCode + ": \tShow Car Finish B / Less Gas\n";
if (strCode == "Y97") return strCode + ": \tShow Car Finish - 3 Gallons Gas\n";


// try if this is a top color information
var color = "";
var colorcode = strCode;
if (strCode.length == 3) colorcode = strCode.substring(1, 3);
if (strYear == "9") color += ExtColor1969(colorcode);
else if (strYear == "0") color += ExtColor1970(colorcode);
else if (strYear == "1") color += ExtColor1971(colorcode);
else if (strYear == "2") color += ExtColor1972(colorcode);
else if (strYear == "3") color += ExtColor1973(colorcode);
else if (strYear == "4") color += ExtColor1974(colorcode);
else if (strYear == "5") color += ExtColor1975(colorcode);
if (color != "Unknown") return strCode + ": \t" + color + " Top Color\n";

return strCode + ": \tUnknown\n";
}







// ---------------------------------------------------------------------
// VIN decoder...
// ---------------------------------------------------------------------



// function decodes car name and make from VIN code
function DecodeCarLine(strCarLine)
{
	if (strCarLine == "B") return "Plymouth Barracuda"
	else if (strCarLine == "C") return "Chrysler"
	else if (strCarLine == "D") return "Dodge Polara,Monaco"
	else if (strCarLine == "J") return "Dodge Challenger"
	else if (strCarLine == "L") return "Dodge Dart,Demon"
	else if (strCarLine == "P") return "Plymouth Fury"
	else if (strCarLine == "R") return "Plymouth Belvedere,Satellite"
	else if (strCarLine == "V") return "Plymouth Valiant,Duster"
	else if (strCarLine == "W") return "Dodge Coronet,Charger"
	else if (strCarLine == "X") return "Dodge Charger"
	else if (strCarLine == "Y") return "Imperial LeBaron"
	
	return "Unknown"
}

// function decodes vehicle price class
function DecodePriceClass(strCarLine, strClass, strEngine, strYear)
{
	var strRet = "Unknown"
	var i;
	
//	                          "         "
//	                          "0123456789"
	     if (strYear == "6") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "7") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "8") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "9") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "0") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "1") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "2") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "3") i = "LMHPSXKTGE".indexOf(strClass)
	else if (strYear == "4") i = "LMHPSXKTGE".indexOf(strClass)

	if (i == 0) return "Low"

	else if (i == 1)
	{
		strRet = "Medium"
//		                          "         "
//		                          "012345678"
		     if (strYear == "6") i = "R~".indexOf(strCarLine)
		else if (strYear == "7") i = "R~".indexOf(strCarLine)
		else if (strYear == "8") i = "RW".indexOf(strCarLine)
		else if (strYear == "9") i = "RW".indexOf(strCarLine)
		else if (strYear == "0") i = "RW".indexOf(strCarLine)
		else if (strYear == "1") i = "R~".indexOf(strCarLine)
		else if (strYear == "2") i = "R~".indexOf(strCarLine)
		else if (strYear == "3") i = "R~".indexOf(strCarLine)
		else if (strYear == "4") i = "R~".indexOf(strCarLine)

		if (i == 0)
			strRet += ", Road Runner"
		else if (i == 1) 
			strRet += ", Super Bee"
			
		return strRet
	}
	else if (i == 2) return "High"
	else if (i == 3)
	{
		strRet = "Premium"
//		                          "         "
//		                          "012345678"
		     if (strYear == "6") i = "~~".indexOf(strCarLine)
		else if (strYear == "7") i = "~~".indexOf(strCarLine)
		else if (strYear == "8") i = "~~".indexOf(strCarLine)
		else if (strYear == "9") i = "~~".indexOf(strCarLine)
		else if (strYear == "0") i = "B~".indexOf(strCarLine)
		else if (strYear == "1") i = "B~".indexOf(strCarLine)
		else if (strYear == "2") i = "~~".indexOf(strCarLine)
		else if (strYear == "3") i = "~~".indexOf(strCarLine)
		else if (strYear == "4") i = "~~".indexOf(strCarLine)

		if (i == 0)
			strRet += ", Gran Coupe"
		return strRet
	}

	else if (i == 4)
	{
		strRet = "Special"
//		                          "         "
//		                          "012345678"
		     if (strYear == "6") i = "B~~~~X".indexOf(strCarLine)
		else if (strYear == "7") i = "B~~R~X".indexOf(strCarLine)
		else if (strYear == "8") i = "B~~RWX".indexOf(strCarLine)
		else if (strYear == "9") i = "B~~RWX".indexOf(strCarLine)
		else if (strYear == "0") i = "BJ~RWX".indexOf(strCarLine)
		else if (strYear == "1") i = "BJ~R~X".indexOf(strCarLine)
		else if (strYear == "2") i = "B~J~~X".indexOf(strCarLine)
		else if (strYear == "3") i = "B~~~~X".indexOf(strCarLine)
		else if (strYear == "4") i = "B~~~~X".indexOf(strCarLine)

		if (i == 0)
		{
			if ((strEngine == "J") && (strYear == "0"))
				strRet += ", AAR 'Cuda"
			else
				strRet += ", 'Cuda"
		}
		else if (i == 1)
		{
			if ((strEngine == "J") && (strYear == "0"))
				strRet += ", T/A"
			else 
				strRet += ", R/T"
		}
		else if (i == 2) strRet += ", Rallye"
		else if (i == 3) strRet += ", GTX"
		else if ((i == 4) || (i == 5)) strRet += ", R/T"
		return strRet
	}

	else if (i == 5) return "Fast Top, Charger 500 or Daytona Charger"
	else if (i == 6) return "Police"
	else if (i == 7) return "Taxi"
	else if (i == 8) return "New York Taxi"
	else if (i == 9) return "Economy"

	return "Unknown"
}


// decodes vehicle body type from VIN string
function DecodeBodyType(strBody)
{
	if (strBody == "21") return "2 Door Coupe"
	else if (strBody == "23") return "2 Door Hardtop"
	else if (strBody == "27") return "Convertible"
	else if (strBody == "29") return "2 Door Sports Hardtop"
	else if (strBody == "41") return "4 Door Sedan"
	else if (strBody == "43") return "4 Door Hardtop"
	else if (strBody == "45") return "6 Passenger Wagon"
	else if (strBody == "46") return "9 Passenger Wagon"

	return "Unknown"
}


function DecodeEngine(strEngine, strYear)
{
	i = -1
//		                          "          11111111112222222222333333333344444444445555555"
//		                          "012345678901234567890123456789012345678901234567890123456"
	     if (strYear == "6") i = "~A~~~~~B~~~~~~C~~~~~D~~E~~~~~~~~~~F~~~~G~~~~~~~H~~~~~~~~~".indexOf(strEngine)
	else if (strYear == "7") i = "~~A~~~~B~~~~~~C~~D~E~~~F~~~~~~~~~~~G~~~H~~~~~~~JL~~~~~~~~".indexOf(strEngine)
	else if (strYear == "8") i = "~~A~~~~B~~~~~~C~~~D~~~~F~~~P~~~~~~~~~G~~H~~~~~~JL~~~~~~~M".indexOf(strEngine)
	else if (strYear == "9") i = "~~A~~~~B~~~~~~C~~~D~~~~F~~~P~~~~~~~~~G~~H~~~~~~JL~~~~~~~M".indexOf(strEngine)
	else if (strYear == "0") i = "~~~B~~~C~~~~~~E~~~~~~~~G~~~H~J~~~~~~~L~~N~~~~~~RU~~~~~~VZ".indexOf(strEngine)
	else if (strYear == "1") i = "~~~B~~~C~~~~~~E~~~~~~~~G~~~H~~~~~~~~L~N~~~~~~~~R~U~~~V~~Z".indexOf(strEngine)
	else if (strYear == "2") i = "~~~~B~~~C~~~~~E~~~~~~~~~G~~~H~~~~~~~~~~~~M~~P~~~~~~U~~V~Z".indexOf(strEngine)
	else if (strYear == "3") i = "~~~~~B~~~C~~~~E~~~~~~~~~~G~~H~~K~~~~~~~~~~M~~P~~~~U~~~~~Z".indexOf(strEngine)
	else if (strYear == "4") i = "~~~~~B~~~C~~~~E~~~~~~~~~~G~~~~K~JL~~~~~~~~MN~~P~~~~~U~~~Z".indexOf(strEngine)

	if (i == 0) return "Special Order Engine"
	else if (i == 1) return "170 101HP 1-1BBL 6 CYL"
	else if (i == 2) return "170 115HP 1-1BBL 6 CYL"
	else if (i == 3) return "198 125HP 1-1BBL 6 CYL"
	else if (i == 4) return "198 100HP(net) 1-1BBL 6 CYL"
	else if (i == 5) return "198 95HP(net) 1-1BBL 6 CYL"
	else if (i == 6) return "215 Low Comp 6 CYL"
	else if (i == 7) return "225 145HP 1-1BBL 6 CYL"
	else if (i == 8) return "225 110HP(net) 1-1BBL 6 CYL"
	else if (i == 9) return "225 105HP(net) 1-1BBL 6 CYL"
	else if (i == 10) return "225 1-1BBL 6 CYL HD"
	else if (i == 11) return "225 1-1BBL 6 CYL For Export"
	else if (i == 12) return "225 1-2BBL 6 CYL"
	else if (i == 13) return "245 C.I. 6 CYL (Australia)"
	else if (i == 14) return "Special Order 6 CYL"
	else if (i == 15) return "265 C.I. 6 CYL (Australia)"
	else if (i == 16) return "265 6-Pack 6 CYL (Australia)"
	else if (i == 17) return "273 180HP 1-2BBL 8 CYL"
	else if (i == 18) return "273 190HP 1-2BBL 8 CYL"
	else if (i == 19) return "273 235HP 1-4BBL 8 CYL"
	else if (i == 20) return "273 180HP 1-2BBL or 235HP 1-4BBL 8 CYL"
	else if (i == 21) return "273 235HP or 275HP 1-4BBL 8 CYL"
	else if (i == 22) return "318 5.2BBL 8 CYL"
	else if (i == 23) return "318 230HP 1-2BBL 8 CYL"
	else if (i == 24) return "318 150HP(net) or 155HP(net) 1-2BBL 8 CYL"
	else if (i == 25) return "318 150HP(net) or 170HP(net) 1-2BBL 8 CYL"
	else if (i == 26) return "318 170HP 1-2BBL 8 CYL"
	else if (i == 27) return "340 275HP 1-4BBL 8 CYL"
	else if (i == 28) return "340 240HP(net) 1-4BBL 8 CYL"
	else if (i == 29) return "340 290HP 3-2BBL 8 CYL"
	else if (i == 30) return "360 180HP(net) 1-2BBL 8 CYL"
	else if (i == 31) return "360 170HP(net) 1-2BBL 8 CYL"
	else if (i == 32) return "360 200HP(net) or 245HP(net) 1-4BBL 8 CYL"
	else if (i == 33) return "360 245HP(net) 1-4BBL 8 CYL HP"
	else if (i == 34) return "361 265HP 1-2BBL 8 CYL"
	else if (i == 35) return "383 270HP 1-2BBL 8 CYL"
	else if (i == 36) return "383 275HP 1-2BBL 8 CYL"
	else if (i == 37) return "383 290HP 1-2BBL 8 CYL"
	else if (i == 38) return "383 300HP 1-4BBL 8 CYL"
	else if (i == 39) return "383 325HP 1-4BBL 8 CYL"
	else if (i == 40) return "383 330HP OR 335HP 1-4BBL 8 CYL"
	else if (i == 41) return "400 190HP(net) 1-2BBL 8 CYL"
	else if (i == 42) return "400 175HP(net) OR 185HP(net) 1-2BBL 8 CYL"
	else if (i == 43) return "400 205HP(net) 1-4BBL 8 CYL"
	else if (i == 44) return "400 255HP(net) 1-4BBL 8 CYL"
	else if (i == 45) return "400 260HP(net) 1-4BBL 8 CYL"
	else if (i == 46) return "400 250HP(net) 1-4BBL 8 CYL"
	else if (i == 47) return "426 HEMI 425HP 2-4BBL 8 CYL"
	else if (i == 48) return "440 375HP 1-4BBL 8 CYL"
	else if (i == 49) return "440 370HP 1-4BBL 8 CYL"
	else if (i == 50) return "440 280HP(net) 1-4BBL 8 CYL"
	else if (i == 51) return "440 280HP(net) or 290HP(net) 1-4BBL 8 CYL"
	else if (i == 52) return "440 275HP(net) 1-4BBL 8 CYL"
	else if (i == 53) return "440 385HP 3-2BBL 8 CYL"
	else if (i == 54) return "440 330HP(net) 3-2BBL 8 CYL"
	else if (i == 55) return "440 390HP 3-2BBL 8 CYL"
	else if (i == 56) return "Special Order 8 CYL"

	return "Unknown"
}


function DecodeModelYear(strYear)
{
	if (strYear == "6") return "1966"
	if (strYear == "7") return "1967"
	if (strYear == "8") return "1968"
	if (strYear == "9") return "1969"
	if (strYear == "0") return "1970"
	if (strYear == "1") return "1971"
	if (strYear == "2") return "1972"
	if (strYear == "3") return "1973"
	if (strYear == "4") return "1974"
	
	return "Unknown"
}


function DecodeAssemblyPlant(strPlant)
{
	if ((strPlant == "A") || (strPlant == "1")) return "Lynch Road, MI, USA"
	else if ((strPlant == "B") || (strPlant == "2")) return "Dodge Main, Hamtramck, MI, USA"
	else if ((strPlant == "C") || (strPlant == "3")) return "Jefferson Avenue, MI, USA"
	else if ((strPlant == "D") || (strPlant == "4")) return "Belvidere, IL, USA"
	else if ((strPlant == "E") || (strPlant == "5")) return "Los Angeles, CA, USA"
	else if ((strPlant == "F") || (strPlant == "6")) return "Newark, DE, USA"
	else if ((strPlant == "G") || (strPlant == "7")) return "St. Louis, MO, USA"
	else if (strPlant == "H") return "New Stanton, PA, USA"
	else if ((strPlant == "P") || (strPlant == "8")) return "Export"
	else if ((strPlant == "R") || (strPlant == "9")) return "Windsor, ONT, CAN"
	
	return "Unknown"
}



// GetBuildDate
// This function decodes build date
// found next to tire code number
function GetBuildDate(strBuildDate, strYear)
{
	var strDescription = "";
	if (strBuildDate.charAt(0) == '1') strDescription = "January ";
	if (strBuildDate.charAt(0) == '2') strDescription = "February ";
	if (strBuildDate.charAt(0) == '3') strDescription = "March ";
	if (strBuildDate.charAt(0) == '4') strDescription = "April ";
	if (strBuildDate.charAt(0) == '5') strDescription = "May ";
	if (strBuildDate.charAt(0) == '6') strDescription = "June ";
	if (strBuildDate.charAt(0) == '7') strDescription = "July ";
	if (strBuildDate.charAt(0) == '8') strDescription = "August ";
	if (strBuildDate.charAt(0) == '9') strDescription = "September ";
	if (strBuildDate.charAt(0) == 'A') strDescription = "October ";
	if (strBuildDate.charAt(0) == 'B') strDescription = "November ";
	if (strBuildDate.charAt(0) == 'C') strDescription = "December ";

	strDescription += strBuildDate.substr(1);
	return strDescription;
}


function VinylTopColor(strColor, strYear)
{
	if (strColor == 'A') return "Gunmetal Gray";
	if (strColor == 'B') return "Blue";
	if (strColor == 'C') return "Gator Grain";
	if (strColor == 'F') return "Green";
	if (strColor == 'G') return "Gator Grain";
	if (strColor == 'H') return "Green Floral (Mod Top 1969 Dart/Coronet Only)";
	if (strColor == 'J' && strYear == "0") return "Walnut Pattern (1970 Only)";
	if (strColor == 'J' && strYear == "1") return "Paisley (1971 Only)";
	if (strColor == 'K') return "Walnut";
	if (strColor == 'L') return "Champagne";
	if (strColor == 'M') return "Burgundy";
	if (strColor == 'P' && strYear == "9") return "Yellow Floral (Mod Top 1969 Barracuda Only)";
	if (strColor == 'P' && strYear == "0") return "Mod Yellow (Mod Top 1970 Barracuda Only)";
	if (strColor == 'Q' && strYear == "9") return "Blue and Green Floral (Mod Top 1969 Satellite Only)";
	if (strColor == 'Q' && strYear == "0") return "Mod Blue (Mod Top 1970 Barracuda Only)";
	if (strColor == 'T') return "Tan";
	if (strColor == 'W') return "White";
	if (strColor == 'X') return "Black";
	if (strColor == 'Y' && strYear == "9") return "Gold and Green Floral (Mod Top 1969 Barracuda Only)";
	if (strColor == 'Y') return "Gold";
	if (strColor == 'Y') return "Tortoise Grain";
	if (strColor == '9') return "Special Order (V19=Black on Superbird)";
	
	return "Unknown color";
}


function StripeColor(strColor, strYear)
{
	if (strColor == 'A') return "Gunmetal Gray";
	if (strColor == 'B') return "Light Blue";
	if (strColor == 'C') return "Plum Crazy";
	if (strColor == 'D') return "Dark Blue";
	if (strColor == 'E') return "Bright Red";
	if (strColor == 'F') return "Green";
	if (strColor == 'H') return "Trans Am Black";
	if (strColor == 'J') return "Chartreuse";
	if (strColor == 'K') return "Go Mango Orange";
	if (strColor == 'M' && strYear == "0") return "Magenta";
	if (strColor == 'M') return "Burgundy";
	if (strColor == 'R') return "Red";
	if (strColor == 'T') return "Tan";
	if (strColor == 'V') return "Orange";
	if (strColor == 'W') return "White";
	if (strColor == 'X') return "Black";
	if (strColor == 'Y') return "Yellow";
	if (strColor == '8') return "Deleted";
	
	return "Unknown color";
}

