// eglobals.js
// Updated: 06 March 2023

// Global Consts
"use strict" ;

const NUL               = ""                          ;
const NEG               = "-"                         ;
const NEWL              = "\n"                        ;
const TOLR              = 0.01                        ; // 1 cm
const tabChr            = String.fromCharCode(9)      ; // tab   character
const spaceChr          = String.fromCharCode(32)     ; // space character
const quoChr            = String.fromCharCode(34)     ; // " character
const commaChr          = String.fromCharCode(44)     ; // , character
const dotChr            = String.fromCharCode(46)     ; // . character
const degChr            = String.fromCharCode(176,32) ; // degree character & space character
const RAD               = Math.PI/180.0               ;
const ARRAYBUFFER       = "arraybuffer"               ;
const GETSTRING         = "GET"                       ;
const NOTAV             = "N/A"                       ;
const UNDEFINED         = "undefined"                 ;
const RADIO1STR         = "Radio1"                    ;
const RADIO2STR         = "Radio2"                    ;
const PLOTBUTTON        = "PlotButton"                ;
const DRAWBUTTON        = "DrawButton"                ;
const MOVEBUTTON        = "MoveButton"                ;
const DXFBUTTON         = "DXFButton"                 ;
const CLOSEBUTTON       = "CloseButton"               ;
const ADDRESSBOX        = "AddressAreaBox"            ;
const WGSTEXTBOX        = "WGSTextBox"                ;
const PCODETEXTBOX      = "PCodeTextBox"              ;
const NAPTEXTBOX        = "NapTextBox"                ;
const POLARTEXTBOX      = "PolarTextBox"              ;
const UTMTEXTBOX        = "UTMTextBox"                ;

const Ec                =  607200                     ;
const Nc                = 1110800                     ;
const TRINCMU           = -0.30                       ; // Cassini -> UTM Trinidad 18'
const TOBGCMU           = -0.45                       ; // Cassini -> UTM Tobago   27'

const OPENSTREETMAP     = "osm"                       ; // OpenStreetMap BaseMap
const POINT             = "point"                     ;
const POLYLINE          = "polyline"                  ;
const POLYGON           = "polygon"                   ;
const SIMPLELINE        = "simple-line"               ;
const SIMPLEFILL        = "simple-fill"               ;
const SIMPLEMARKER      = "simple-marker"             ;
const STARTSTR          = "start"                     ;
const UPDATESTR         = "update"                    ;
const ENDSTRING         = "end"                       ;
const DRAGSTRING        = "drag"                      ;
const CLICK             = "click"                     ;
const POINTERDOWN       = "pointer-down"              ;
const ZoomVal           = 10                          ; // Initial Zoom Level 10

const CODELENGTH        = 10                          ;
const SEPARATOR         = "+"                         ;
const SEPARATORPOSITION = 8                           ;
const PADDINGCHARACTER  = "0"                         ;
const LATITUDEMAX       = 90                          ;
const LONGITUDEMAX      = 180                         ;
const GRIDCOLUMNS       = 4                           ;
const GRIDROWS          = 5                           ;
const GRIDSIZEDEGREES   = 0.000125                    ;
const CODEALPHABET      = "23456789CFGHJMPQRVWX"            ;
const PAIRRESOLUTIONS   = [20.0, 1.0, .05, .0025, .000125]  ;

const SHAPEFILENAME1    = "../kmsmaps/wardpolys.shp"        ; // Irregular Ward Polygons Shapefile
const SHAPEFILENAME2    = "../kmsmaps/trinsheets.shp"       ; // Rect      Ward Sheets   Shapefile
const LOCIQKEYSTR       = "https://us1.locationiq.com/v1/reverse.php?key=pk.e153f683e90325851361cd63abb8745b&lat=" ;

// DXF Export Constants
const DXFScale          = 1000.0                            ;                                    // TEXT SCALE 1:1000
const TxHt              = 0.0018 * DXFScale                 ;
const Offset            = 0.300  * TxHt                     ;
const ENTStr            = "0\nSECTION\n2\nENTITIES\n"       ;                                    // HEADER
const sPreL             = "0\nLINE\n8\nLINES\n6\nContinuous\n62\n7\n100\nAcDbLine\n10\n"       ; // LINE
const sPosL             = "\n31\n0.0\n"                     ;
const sPreT             = "0\nTEXT\n8\nTEXT\n62\n7\n100\nAcDbText\n10\n"                       ; // BRG & DIST
const mStr0             = "\n20\n"                          ;
const mStr1             = "\n30\n0.0\n40\n"                 ;
const mStr2             = "\n41\n0.7\n1\n"                  ;
const mStr3             = "\n50\n"                          ;
const mStr4             = "\n72\n1\n11\n"                   ;
const mStr5             = "\n21\n"                          ;
const mStr6             = "\n30\n0.0\n11\n"                 ;
const mStr7             = "\n50\n0.0\n72\n1\n11\n"          ;
const sPosT             = "\n31\n0.0\n73\n1\n"              ;
const sPreC             = "0\nCIRCLE\n8\nCIRCLES\n6\nContinuous\n62\n1\n100\nAcDbCircle\n10\n" ; // CIRCLE
const sPosC             = "\n30\n0.0\n40\n0.9\n"            ;
const sPrePN            = "0\nTEXT\n8\nPOINTNAMES\n6\nContinuous\n62\n1\n100\nAcDbText\n10\n"  ; // POINTNAMES
const sMid1             = "\n30\n0.0\n40\n"                 ;
const sMid2             = "\n1\n"                           ;
const sMid3             = "\n11\n"                          ;
const sMid4             = "\n21\n"                          ;
const sPosPN            = "\n31\n0.0\n73\n2\n"              ;
const EOFStr            = "0\nENDSEC\n0\nEOF\n"             ;                                    // FOOTER

// Global Variables

var CLatitude         = +10.66662035                ; // Current WGS84 Lat
var CLongitude        = -61.17058443                ; // Current WGS84 Lng
var NapEast           = 699935.0                    ; // Current Nap   East
var NapNort           = 1179525.0                   ; // Current Nap   North
var WGSEast           = 700105.0                    ; // Current WGS84 East
var WGSNort           = 1179525.0                   ; // Current WGS84 North
var WEastA            = []                          ; // Array of User Drawn Lines
var WNortA            = []                          ;
var WEastB            = []                          ;
var WNortB            = []                          ;
var CadSheetStr       = "---"                       ;
var CadSectionStr     = "-----"                     ;
var W3WHyperlink      = NOTAV                       ;
var WLatStart         = CLatitude                   ; // Start Point Lat
var WLngStart         = CLongitude                  ; // Start Point Lng
var BLLat             = 0.0                         ;
var BLLng             = 0.0                         ;
var TLLat             = 0.0                         ;
var TLLng             = 0.0                         ;
var TRLat             = 0.0                         ;
var TRLng             = 0.0                         ;
var BRLat             = 0.0                         ;
var BRLng             = 0.0                         ;
var WardShStr         = NUL                         ; // Ward  Sheet
var SectShStr         = NUL                         ; // Sheet Section

var shp               = null                        ; // ward polys  shapefile binary data
var shw               = null                        ; // ward sheets shapefile binary data
var wpolys            = []                          ; // some wards  have multiple polygons
var wpolyindex        = []                          ; // index tracker to match polygons with wards 0-40

var POINTGraphic                                    ; // Red Circle Pin Martker
var draggingGraphic                                 ; // Dragging Marker
var tempGraphic                                     ; // Dragging Marker

var WLatD, WLngD, NLatR, NLngR, FirstFlag=true      ; // Traverse Variables
var GNe, GNn, tmpLat, tmpLng, ToPtNe, ToPtNn        ;
var WEastStart, WNortStart, WLatDStart, WLngDStart  ;
var PlotNapFlag=true, PlotNapE, PlotNapN            ;
var NEastStart, NNortStart                          ;
var cel                                             ;

// ------------------------------------------ Wards & Counties ---------------------------------------------------

var wards=[]                   ;		var counties=[]               ;
wards[0]="Borough of Chaguanas";		counties[0]="County of Caroni";
wards[1]="Ward of Chaguanas";			counties[1]="County of Caroni";
wards[2]="Ward of Couva";				counties[2]="County of Caroni";
wards[3]="Ward of Cunupia";				counties[3]="County of Caroni";
wards[4]="Ward of Montserrat";			counties[4]="County of Caroni";
wards[5]="Ward of Guayaguayare";		counties[5]="County of Mayaro";
wards[6]="Ward of Trinity";				counties[6]="County of Mayaro";
wards[7]="Ward of Charuma";				counties[7]="County of Nariva";
wards[8]="Ward of Cocal";				counties[8]="County of Nariva";
wards[9]="Ward of Manzanilla";			counties[9]="County of St. Andrew";
wards[10]="Ward of Matura";				counties[10]="County of St. Andrew";
wards[11]="Ward of Tamana";				counties[11]="County of St. Andrew";
wards[12]="Ward of Turure";				counties[12]="County of St. Andrew";
wards[13]="Ward of Valencia";			counties[13]="County of St. Andrew";
wards[14]="Ward of Toco";				counties[14]="County of St. David";
wards[15]="Borough of Arima";			counties[15]="County of St. George";
wards[16]="City of Port of Spain";		counties[16]="County of St. George";
wards[17]="Ward of Arima";				counties[17]="County of St. George";
wards[18]="Ward of Blanchisseuse";		counties[18]="County of St. George";
wards[19]="Ward of Diego Martin";		counties[19]="County of St. George";
wards[20]="Ward of San Rafael";			counties[20]="County of St. George";
wards[21]="Ward of St. Ann's";			counties[21]="County of St. George";
wards[22]="Ward of Tacarigua";			counties[22]="County of St. George";
wards[23]="Borough of Point Fortin";	counties[23]="County of St. Patrick";
wards[24]="Borough of Siparia formerly Ward of Cedros";				counties[24]="County of St. Patrick";
wards[25]="Borough of Siparia formerly Ward of Erin";				counties[25]="County of St. Patrick";
wards[26]="Borough of Siparia formerly Ward of La Brea";			counties[26]="County of St. Patrick";
wards[27]="Ward of Siparia";			counties[27]="County of St. Patrick";
wards[28]="City of San Fernando";		counties[28]="County of Victoria";
wards[29]="Ward of Moruga";				counties[29]="County of Victoria";
wards[30]="Ward of Naparima";			counties[30]="County of Victoria";
wards[31]="Ward of Ortoire";			counties[31]="County of Victoria";
wards[32]="Ward of Pointe-a-Pierre";	counties[32]="County of Victoria";
wards[33]="Ward of Savana Grande";		counties[33]="County of Victoria";
wards[34]="Parish of St. Andrew";		counties[34]="Ward of Tobago";
wards[35]="Parish of St. David";		counties[35]="Ward of Tobago";
wards[36]="Parish of St. John";			counties[36]="Ward of Tobago";
wards[37]="Parish of St. Mary";			counties[37]="Ward of Tobago";
wards[38]="Parish of St. Patrick";		counties[38]="Ward of Tobago";
wards[39]="Parish of St. Paul";			counties[39]="Ward of Tobago";
wards[40]="Parish of St. George";		counties[40]="Ward of Tobago";

/* ============================================= TRINIDAD ========================================= */

// Polygon of Outline of Trinidad Ward Sheets
var TrPX=[]       ; var TrPY=[]        ;
TrPX[0]  = 634700 ; TrPY[0]  = 1184000 ;
TrPX[1]  = 640800 ; TrPY[1]  = 1184000 ;
TrPX[2]  = 640800 ; TrPY[2]  = 1184800 ;
TrPX[3]  = 646400 ; TrPY[3]  = 1184800 ;
TrPX[4]  = 646400 ; TrPY[4]  = 1189200 ;
TrPX[5]  = 657600 ; TrPY[5]  = 1189200 ;
TrPX[6]  = 657600 ; TrPY[6]  = 1190400 ;
TrPX[7]  = 662200 ; TrPY[7]  = 1190400 ;
TrPX[8]  = 662200 ; TrPY[8]  = 1191100 ;
TrPX[9]  = 663200 ; TrPY[9]  = 1191100 ;
TrPX[10] = 663200 ; TrPY[10] = 1194800 ;
TrPX[11] = 674400 ; TrPY[11] = 1194800 ;
TrPX[12] = 674400 ; TrPY[12] = 1196000 ;
TrPX[13] = 685600 ; TrPY[13] = 1196000 ;
TrPX[14] = 685600 ; TrPY[14] = 1194800 ;
TrPX[15] = 702400 ; TrPY[15] = 1194800 ;
TrPX[16] = 702400 ; TrPY[16] = 1200400 ;
TrPX[17] = 730400 ; TrPY[17] = 1200400 ;
TrPX[18] = 730400 ; TrPY[18] = 1194800 ;
TrPX[19] = 725500 ; TrPY[19] = 1194800 ;
TrPX[20] = 725500 ; TrPY[20] = 1193100 ;
TrPX[21] = 724800 ; TrPY[21] = 1193100 ;
TrPX[22] = 724800 ; TrPY[22] = 1183600 ;
TrPX[23] = 719200 ; TrPY[23] = 1183600 ;
TrPX[24] = 719200 ; TrPY[24] = 1144400 ;
TrPX[25] = 724800 ; TrPY[25] = 1144400 ;
TrPX[26] = 724800 ; TrPY[26] = 1138800 ;
TrPX[27] = 719200 ; TrPY[27] = 1138800 ;
TrPX[28] = 719200 ; TrPY[28] = 1124100 ;
TrPX[29] = 720600 ; TrPY[29] = 1124100 ;
TrPX[30] = 720600 ; TrPY[30] = 1120800 ;
TrPX[31] = 719200 ; TrPY[31] = 1120800 ;
TrPX[32] = 719200 ; TrPY[32] = 1116400 ;
TrPX[33] = 708000 ; TrPY[33] = 1116400 ;
TrPX[34] = 708000 ; TrPY[34] = 1110800 ;
TrPX[35] = 624000 ; TrPY[35] = 1110800 ;
TrPX[36] = 624000 ; TrPY[36] = 1110100 ;
TrPX[37] = 612800 ; TrPY[37] = 1110100 ;
TrPX[38] = 612800 ; TrPY[38] = 1115700 ;
TrPX[39] = 624000 ; TrPY[39] = 1115700 ;
TrPX[40] = 624000 ; TrPY[40] = 1122000 ;
TrPX[41] = 640800 ; TrPY[41] = 1122000 ;
TrPX[42] = 640800 ; TrPY[42] = 1127600 ;
TrPX[43] = 646400 ; TrPY[43] = 1127600 ;
TrPX[44] = 646400 ; TrPY[44] = 1133200 ;
TrPX[45] = 663200 ; TrPY[45] = 1133200 ;
TrPX[46] = 663200 ; TrPY[46] = 1176800 ;
TrPX[47] = 657600 ; TrPY[47] = 1176800 ;
TrPX[48] = 657600 ; TrPY[48] = 1178000 ;
TrPX[49] = 634700 ; TrPY[49] = 1178000 ;

// Trinidad Odd-Sized Ward Sheets

var SPolyX = []   ;
var SPolyY = []   ;
var ShName = []   ;
for(var k=0; k<10 ; k++)
{
   SPolyX[k] = [] ; // 2D Array
   SPolyY[k] = [] ; // 2D Array
} // end for k

// Sheet 11F
ShName[0]    = "11F"  ;
SPolyX[0][0] = 634700 ; SPolyY[0][0] = 1184000 ;
SPolyX[0][1] = 640800 ; SPolyY[0][1] = 1184000 ;
SPolyX[0][2] = 640800 ; SPolyY[0][2] = 1178000 ;
SPolyX[0][3] = 634700 ; SPolyY[0][3] = 1178000 ;

// Sheet 12A & 12D
ShName[1]    = "12A & 12D" ;
SPolyX[1][0] = 640800 ; SPolyY[1][0] = 1184800 ;
SPolyX[1][1] = 646400 ; SPolyY[1][1] = 1184800 ;
SPolyX[1][2] = 646400 ; SPolyY[1][2] = 1178000 ;
SPolyX[1][3] = 640800 ; SPolyY[1][3] = 1178000 ;

// Sheet 3D & 13A
ShName[2]    = "3D & 13A" ;
SPolyX[2][0] = 657600 ; SPolyY[2][0] = 1190400 ;
SPolyX[2][1] = 662200 ; SPolyY[2][1] = 1190400 ;
SPolyX[2][2] = 662200 ; SPolyY[2][2] = 1191100 ;
SPolyX[2][3] = 663200 ; SPolyY[2][3] = 1191100 ;
SPolyX[2][4] = 663200 ; SPolyY[2][4] = 1183600 ;
SPolyX[2][5] = 657600 ; SPolyY[2][5] = 1183600 ;

// Sheet 13D & 23A
ShName[3]    = "13D & 23A" ;
SPolyX[3][0] = 657600 ; SPolyY[3][0] = 1183600 ;
SPolyX[3][1] = 663200 ; SPolyY[3][1] = 1183600 ;
SPolyX[3][2] = 663200 ; SPolyY[3][2] = 1176800 ;
SPolyX[3][3] = 657600 ; SPolyY[3][3] = 1176800 ;

// Sheet 4A & 4D
ShName[4]    = "4A & 4D" ;
SPolyX[4][0] = 674400 ; SPolyY[4][0] = 1196000 ;
SPolyX[4][1] = 680000 ; SPolyY[4][1] = 1196000 ;
SPolyX[4][2] = 680000 ; SPolyY[4][2] = 1189200 ;
SPolyX[4][3] = 674400 ; SPolyY[4][3] = 1189200 ;

// Sheet 4E & 4B
ShName[5]    = "4E & 4B" ;
SPolyX[5][0] = 680000 ; SPolyY[5][0] = 1196000 ;
SPolyX[5][1] = 685600 ; SPolyY[5][1] = 1196000 ;
SPolyX[5][2] = 685600 ; SPolyY[5][2] = 1189200 ;
SPolyX[5][3] = 680000 ; SPolyY[5][3] = 1189200 ;

// Sheet 7A & 7D
ShName[6]    = "7A & 7D" ;
SPolyX[6][0] = 724800 ; SPolyY[6][0] = 1200400 ;
SPolyX[6][1] = 730400 ; SPolyY[6][1] = 1200400 ;
SPolyX[6][2] = 730400 ; SPolyY[6][2] = 1194800 ;
SPolyX[6][3] = 725500 ; SPolyY[6][3] = 1194800 ;
SPolyX[6][4] = 725500 ; SPolyY[6][4] = 1193100 ;
SPolyX[6][5] = 724800 ; SPolyY[6][5] = 1193100 ;

// Sheet 70E & 80B
ShName[7]    = "70E & 80B" ;
SPolyX[7][0] = 612800 ; SPolyY[7][0] = 1115700 ;
SPolyX[7][1] = 618400 ; SPolyY[7][1] = 1115700 ;
SPolyX[7][2] = 618400 ; SPolyY[7][2] = 1110100 ;
SPolyX[7][3] = 612800 ; SPolyY[7][3] = 1110100 ;

// Sheet 70F & 80C
ShName[8]    = "70F & 80C" ;
SPolyX[8][0] = 618400 ; SPolyY[8][0] = 1115700 ;
SPolyX[8][1] = 624000 ; SPolyY[8][1] = 1115700 ;
SPolyX[8][2] = 624000 ; SPolyY[8][2] = 1110100 ;
SPolyX[8][3] = 618400 ; SPolyY[8][3] = 1110100 ;

// Sheet 76B, 76C & 66F
ShName[9]    = "76B&C & 66F" ;
SPolyX[9][0] = 713600 ; SPolyY[9][0] = 1122000 ;
SPolyX[9][1] = 719200 ; SPolyY[9][1] = 1122000 ;
SPolyX[9][2] = 719200 ; SPolyY[9][2] = 1124100 ;
SPolyX[9][3] = 720600 ; SPolyY[9][3] = 1124100 ;
SPolyX[9][4] = 720600 ; SPolyY[9][4] = 1120800 ;
SPolyX[9][5] = 719200 ; SPolyY[9][5] = 1120800 ;
SPolyX[9][6] = 719200 ; SPolyY[9][6] = 1116400 ;
SPolyX[9][7] = 713600 ; SPolyY[9][7] = 1116400 ;

/* ===================== TOBAGO ========================= */

// Polygon of Outline of Tobago Ward Sheets
var TbPX = []    ; var TbPY = []     ;
TbPX[0]  = 734380; TbPY[0]  = 1238597;
TbPX[1]  = 740478; TbPY[1]  = 1238645;
TbPX[2]  = 740440; TbPY[2]  = 1243523;
TbPX[3]  = 745318; TbPY[3]  = 1243562;
TbPX[4]  = 745289; TbPY[4]  = 1247220;
TbPX[5]  = 750167; TbPY[5]  = 1247259;
TbPX[6]  = 750129; TbPY[6]  = 1252137;
TbPX[7]  = 759886; TbPY[7]  = 1252215;
TbPX[8]  = 759867; TbPY[8]  = 1254654;
TbPX[9]  = 764745; TbPY[9]  = 1254693;
TbPX[10] = 764726; TbPY[10] = 1257132;
TbPX[11] = 770819; TbPY[11] = 1257181;
TbPX[12] = 770858; TbPY[12] = 1252302;
TbPX[13] = 774523; TbPY[13] = 1252331;
TbPX[14] = 774561; TbPY[14] = 1247452;
TbPX[15] = 769678; TbPY[15] = 1247413;
TbPX[16] = 769716; TbPY[16] = 1242534;
TbPX[17] = 764842; TbPY[17] = 1242496;
TbPX[18] = 764861; TbPY[18] = 1240056;
TbPX[19] = 759982; TbPY[19] = 1240018;
TbPX[20] = 760011; TbPY[20] = 1236359;
TbPX[21] = 755132; TbPY[21] = 1236320;
TbPX[22] = 755142; TbPY[22] = 1235109;
TbPX[23] = 745385; TbPY[23] = 1235029;
TbPX[24] = 745414; TbPY[24] = 1231366;
TbPX[25] = 739316; TbPY[25] = 1231318;
TbPX[26] = 739306; TbPY[26] = 1232538;
TbPX[27] = 734428; TbPY[27] = 1232500;

// Tobago Ward Sheets

var TbLat  = []   ;
var TbLng  = []   ;
var TbSx   = []   ;
var TbSy   = []   ;
var TbName = []   ;
for(var k=0; k<19 ; k++)
{
   TbLat[k] = []  ; // 2D Array
   TbLng[k] = []  ; // 2D Array
   TbSx[k]  = []  ; // 2D Array
   TbSy[k]  = []  ; // 2D Array
} // end for k

// Sheet 1C
TbName[0]    = "1C" ;
TbSx[0][0] = 740440; TbSy[0][0] = 1243523;
TbSx[0][1] = 745318; TbSy[0][1] = 1243562;
TbSx[0][2] = 745356; TbSy[0][2] = 1238683;
TbSx[0][3] = 740478; TbSy[0][3] = 1238645;
TbLat[0][0] = 11.2425941422998; TbLng[0][0] = -60.7961794395493;
TbLat[0][1] = 11.2426116563031; TbLng[0][1] = -60.7515213262013;
TbLat[0][2] = 11.1985181949032; TbLng[0][2] = -60.7515147056315;
TbLat[0][3] = 11.1985084228019; TbLng[0][3] = -60.7961659661735;

// Sheet 1E
TbName[1]    = "1E" ;
TbSx[1][0] = 734380; TbSy[1][0] = 1238597;
TbSx[1][1] = 739258; TbSy[1][1] = 1238635;
TbSx[1][2] = 739306; TbSy[1][2] = 1232538;
TbSx[1][3] = 734428; TbSy[1][3] = 1232500;
TbLat[1][0] = 11.1984822555309; TbLng[1][0] = -60.8519864664347;
TbLat[1][1] = 11.1985004429437; TbLng[1][1] = -60.8073335950562;
TbLat[1][2] = 11.1433972114044; TbLng[1][2] = -60.8073082151862;
TbLat[1][3] = 11.1433774484013; TbLng[1][3] = -60.8519526479131;

// Sheet 1F
TbName[2]    = "1F" ;
TbSx[2][0] = 739258; TbSy[2][0] = 1238635;
TbSx[2][1] = 745356; TbSy[2][1] = 1238683;
TbSx[2][2] = 745385; TbSy[2][2] = 1235025;
TbSx[2][3] = 739287; TbSy[2][3] = 1234977;
TbLat[2][0] = 11.1985004429437; TbLng[2][0] = -60.8073335950562;
TbLat[2][1] = 11.1985181949032; TbLng[2][1] = -60.7515147056315;
TbLat[2][2] = 11.1654954297537; TbLng[2][2] = -60.7515039316966;
TbLat[2][3] = 11.1654583947669; TbLng[2][3] = -60.8073166281551;

// Sheet 1J
TbName[3]    = "1J" ;
TbSx[3][0] = 739287; TbSy[3][0] = 1234977;
TbSx[3][1] = 745385; TbSy[3][1] = 1235025;
TbSx[3][2] = 745414; TbSy[3][2] = 1231366;
TbSx[3][3] = 739316; TbSy[3][3] = 1231318;
TbLat[3][0] = 11.1654583947669; TbLng[3][0] = -60.8073166281551;
TbLat[3][1] = 11.1654954297537; TbLng[3][1] = -60.7515039316966;
TbLat[3][2] = 11.1323912659132; TbLng[3][2] = -60.7514930421915;
TbLat[3][3] = 11.1323710937179; TbLng[3][3] = -60.8072992785867;

// Sheet 2B
TbName[4]    = "2B" ;
TbSx[4][0] = 750129; TbSy[4][0] = 1252137;
TbSx[4][1] = 755007; TbSy[4][1] = 1252176;
TbSx[4][2] = 755046; TbSy[4][2] = 1247297;
TbSx[4][3] = 750167; TbSy[4][3] = 1247259;
TbLat[4][0] = 11.3197630673643; TbLng[4][0] = -60.7068657363909;
TbLat[4][1] = 11.3197646973901; TbLng[4][1] = -60.6621983519334;
TbLat[4][2] = 11.2756740452751; TbLng[4][2] = -60.6621985554972;
TbLat[4][3] = 11.2756801747049; TbLng[4][3] = -60.7068681898963;

// Sheet 2C
TbName[5]    = "2C" ;
TbSx[5][0] = 755007; TbSy[5][0] = 1252176;
TbSx[5][1] = 759886; TbSy[5][1] = 1252215;
TbSx[5][2] = 759924; TbSy[5][2] = 1247336;
TbSx[5][3] = 755046; TbSy[5][3] = 1247297;
TbLat[5][0] = 11.3197646973901; TbLng[5][0] = -60.6621983519334;
TbLat[5][1] = 11.3197594415297; TbLng[5][1] = -60.6175231874313;
TbLat[5][2] = 11.2756702385618; TbLng[5][2] = -60.6175393799076;
TbLat[5][3] = 11.2756740452751; TbLng[5][3] = -60.6621985554972;

// Sheet 2D
TbName[6]    = "2D" ;
TbSx[6][0] = 745289; TbSy[6][0] = 1247220;
TbSx[6][1] = 750167; TbSy[6][1] = 1247259;
TbSx[6][2] = 750215; TbSy[6][2] = 1241161;
TbSx[6][3] = 745337; TbSy[6][3] = 1241122;
TbLat[6][0] = 11.2756704124751; TbLng[6][0] = -60.7515300897069;
TbLat[6][1] = 11.2756801747049; TbLng[6][1] = -60.7068681898963;
TbLat[6][2] = 11.2205718363561; TbLng[6][2] = -60.7068648175158;
TbLat[6][3] = 11.2205604221227; TbLng[6][3] = -60.7515182160946;

// Sheet 2E
TbName[7]    = "2E" ;
TbSx[7][0] = 750167; TbSy[7][0] = 1247259;
TbSx[7][1] = 755046; TbSy[7][1] = 1247297;
TbSx[7][2] = 755094; TbSy[7][2] = 1241199;
TbSx[7][3] = 750215; TbSy[7][3] = 1241161;
TbLat[7][0] = 11.2756801747049; TbLng[7][0] = -60.7068681898963;
TbLat[7][1] = 11.2756740452751; TbLng[7][1] = -60.6621985554972;
TbLat[7][2] = 11.2205673931170; TbLng[7][2] = -60.6622036852297;
TbLat[7][3] = 11.2205718363561; TbLng[7][3] = -60.7068648175158;

// Sheet 2F
TbName[8]    = "2F" ;
TbSx[8][0] = 755046; TbSy[8][0] = 1247297;
TbSx[8][1] = 759924; TbSy[8][1] = 1247336;
TbSx[8][2] = 759972; TbSy[8][2] = 1241237;
TbSx[8][3] = 755094; TbSy[8][3] = 1241199;
TbLat[8][0] = 11.2756740452751; TbLng[8][0] = -60.6621985554972;
TbLat[8][1] = 11.2756702385618; TbLng[8][1] = -60.6175393799076;
TbLat[8][2] = 11.2205562701671; TbLng[8][2] = -60.6175427092948;
TbLat[8][3] = 11.2205673931170; TbLng[8][3] = -60.6622036852297;

// Sheet 2G
TbName[9]    = "2G" ;
TbSx[9][0] = 745337; TbSy[9][0] = 1241122;
TbSx[9][1] = 750215; TbSy[9][1] = 1241161;
TbSx[9][2] = 750263; TbSy[9][2] = 1235063;
TbSx[9][3] = 745385; TbSy[9][3] = 1235025;
TbLat[9][0] = 11.2205604221227; TbLng[9][0] = -60.7515182160946;
TbLat[9][1] = 11.2205718363561; TbLng[9][1] = -60.7068648175158;
TbLat[9][2] = 11.1654633115669; TbLng[9][2] = -60.7068593380724;
TbLat[9][3] = 11.1654954297537; TbLng[9][3] = -60.7515039316966;

// Sheet 2H
TbName[10]   = "2H" ;
TbSx[10][0] = 750215; TbSy[10][0] = 1241161;
TbSx[10][1] = 755094; TbSy[10][1] = 1241199;
TbSx[10][2] = 755142; TbSy[10][2] = 1235109;
TbSx[10][3] = 750263; TbSy[10][3] = 1235063;
TbLat[10][0] = 11.2205718363561; TbLng[10][0] = -60.7068648175158;
TbLat[10][1] = 11.2205673931170; TbLng[10][1] = -60.6622036852297;
TbLat[10][2] = 11.1655328451168; TbLng[10][2] = -60.6622060849295;
TbLat[10][3] = 11.1654633115669; TbLng[10][3] = -60.7068593380724;

// Sheet 2J
TbName[11]   = "2J" ;
TbSx[11][0] = 755094; TbSy[11][0] = 1241199;
TbSx[11][1] = 759972; TbSy[11][1] = 1241237;
TbSx[11][2] = 760011; TbSy[11][2] = 1236359;
TbSx[11][3] = 755132; TbSy[11][3] = 1236320;
TbLat[11][0] = 11.2205673931170; TbLng[11][0] = -60.6622036852297;
TbLat[11][1] = 11.2205562701671; TbLng[11][1] = -60.6175530839548;
TbLat[11][2] = 11.1764757605170; TbLng[11][2] = -60.6175568865145;
TbLat[11][3] = 11.1764765440104; TbLng[11][3] = -60.6622099441810;

// Sheet 3A
TbName[12]   = "3A" ;
TbSx[12][0] = 759867; TbSy[12][0] = 1254654;
TbSx[12][1] = 764745; TbSy[12][1] = 1254693;
TbSx[12][2] = 764784; TbSy[12][2] = 1249814;
TbSx[12][3] = 759905; TbSy[12][3] = 1249775;
TbLat[12][0] = 11.3417994798031; TbLng[12][0] = -60.6175146008452;
TbLat[12][1] = 11.3417867812614; TbLng[12][1] = -60.5728465706205;
TbLat[12][2] = 11.2976989669988; TbLng[12][2] = -60.5728611582429;
TbLat[12][3] = 11.2977103371323; TbLng[12][3] = -60.6175314968988;

// Sheet 3B
TbName[13]   = "3B" ;
TbSx[13][0] = 764726; TbSy[13][0] = 1257132;
TbSx[13][1] = 770819; TbSy[13][1] = 1257181;
TbSx[13][2] = 770858; TbSy[13][2] = 1252302;
TbSx[13][3] = 764765; TbSy[13][3] = 1252253;
TbLat[13][0] = 11.3638260876080; TbLng[13][0] = -60.5728341990883;
TbLat[13][1] = 11.3638023221617; TbLng[13][1] = -60.5170380734107;
TbLat[13][2] = 11.3197163578538; TbLng[13][2] = -60.5170619474403;
TbLat[13][3] = 11.3197383336352; TbLng[13][3] = -60.5728495038658;

// Sheet 3D
TbName[14]   = "3D" ;
TbSx[14][0] = 759905; TbSy[14][0] = 1249775;
TbSx[14][1] = 764784; TbSy[14][1] = 1249814;
TbSx[14][2] = 764823; TbSy[14][2] = 1244935;
TbSx[14][3] = 759944; TbSy[14][3] = 1244897;
TbLat[14][0] = 11.2977103371323; TbLng[14][0] = -60.6175314968988;
TbLat[14][1] = 11.2976989669988; TbLng[14][1] = -60.5728611582429;
TbLat[14][2] = 11.2536110328171; TbLng[14][2] = -60.5728743129988;
TbLat[14][3] = 11.2536300363715; TbLng[14][3] = -60.6175377575002;

// Sheet 3E
TbName[15]   = "3E" ;
TbSx[15][0] = 764765; TbSy[15][0] = 1252253;
TbSx[15][1] = 770858; TbSy[15][1] = 1252302;
TbSx[15][2] = 770896; TbSy[15][2] = 1247423;
TbSx[15][3] = 764803; TbSy[15][3] = 1247374;
TbLat[15][0] = 11.3197383336352; TbLng[15][0] = -60.5728495038658;
TbLat[15][1] = 11.3197163578538; TbLng[15][1] = -60.5170619474403;
TbLat[15][2] = 11.2756303501946; TbLng[15][2] = -60.5170935067907;
TbLat[15][3] = 11.2756505345869; TbLng[15][3] = -60.5728725297264;

// Sheet 3G
TbName[16]   = "3G" ;
TbSx[16][0] = 759944; TbSy[16][0] = 1244897;
TbSx[16][1] = 764823; TbSy[16][1] = 1244935;
TbSx[16][2] = 764861; TbSy[16][2] = 1240056;
TbSx[16][3] = 759982; TbSy[16][3] = 1240018;
TbLat[16][0] = 11.2536300363715; TbLng[16][0] = -60.6175377575002;
TbLat[16][1] = 11.2536110328171; TbLng[16][1] = -60.5728743129988;
TbLat[16][2] = 11.2095230539204; TbLng[16][2] = -60.5728951874393;
TbLat[16][3] = 11.2095406535629; TbLng[16][3] = -60.6175518410140;

// Sheet 3H
TbName[17]   = "3H" ;
TbSx[17][0] = 764803; TbSy[17][0] = 1247374;
TbSx[17][1] = 769678; TbSy[17][1] = 1247413;
TbSx[17][2] = 769716; TbSy[17][2] = 1242534;
TbSx[17][3] = 764842; TbSy[17][3] = 1242496;
TbLat[17][0] = 11.2756505345869; TbLng[17][0] = -60.5728725297264;
TbLat[17][1] = 11.2756333815611; TbLng[17][1] = -60.5282436532004;
TbLat[17][2] = 11.2315468921587; TbLng[17][2] = -60.5282720429786;
TbLat[17][3] = 11.2315715761771; TbLng[17][3] = -60.5728848918067;

// Sheet 3F
TbName[18]   = "3F" ;
TbSx[18][0] = 770858; TbSy[18][0] = 1252302;
TbSx[18][1] = 774523; TbSy[18][1] = 1252331;
TbSx[18][2] = 774561; TbSy[18][2] = 1247452;
TbSx[18][3] = 770896; TbSy[18][3] = 1247423;
TbLat[18][0] = 11.3197163578538; TbLng[18][0] = -60.5170619474403;
TbLat[18][1] = 11.3196937335357; TbLng[18][1] = -60.4835063148018;
TbLat[18][2] = 11.2756088237886; TbLng[18][2] = -60.4835430066177;
TbLat[18][3] = 11.2756303501946; TbLng[18][3] = -60.5170935067907;

// ----------------------- ESRI Graphics ---------------------

const RedMarkerSymbol =
{
	type   : SIMPLEMARKER   ,
	color  : [255, 0, 0]    , // red marker
	outline:
	{
		color: [255, 255, 0], // yellow outline
		width: 1
	}
};

const CyanLineSymbol =
{
	type : SIMPLELINE       ,
	color: [0, 255, 255]    , // cyan lines
	width: 1
}; // CyanLineSymbol

const YellowLineSymbol =
{
	type : SIMPLELINE       ,
	color: [255, 255, 0]    , // yellow lines
	width: 2
}; // YellowLineSymbol

const CyanFillSymbol =
{
	type   : SIMPLEFILL     ,
	color  : [0, 0, 0, 0.0] , // opacity 0%
	outline:
	{
		color: [0, 255, 255], // cyan lines
		width: 1
	}
}; // CyanFillSymbol

const RedFillSymbol =
{
	type   : SIMPLEFILL     ,
	color  : [0, 0, 0, 0.0] , // opacity 0%
	outline:
	{
		color: [255, 0, 0]  , // red lines
		width: 1
	}
}; // RedFillSymbol

const BlueFillSymbol =
{
	type   : SIMPLEFILL     ,
	color  : [0, 0, 0, 0.1] , // opacity 10%
	outline:
	{
		color: [0, 0, 255]  , // blue lines
		width: 1
	}
}; // BlueFillSymbol
// eof