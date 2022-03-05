# Study name HS_PlotInterestingTimes_GH
# by hummingSloth https://github.com/hummingSloth/thinkorswim
# version 1.0

script IsTime {
    input time = 0000;
    plot IsTime = SecondsFromTime(time)[1] < 0 and SecondsFromTime(time) >= 0;
}
declare upper;
declare hide_on_daily;

input showTodayOnly = yes;
input showMarketOpen =  yes;
input marketOpen = 0930;
input marketOpenText = "Market Open";
input showZombieTime = yes;
input zombieTime = 1030;
input zombieText = "Zombie Hour";
input showZombieReversalTime = yes;
input zombieReversalTime = 1430;
input zombieReversalText = "Zombie Reversal";
input showPowerHour = yes;
input powerHourTime = 1500;
input powerHourText = "Power Hour";
input showMarketClose = yes;
input marketCloseTime = 1600;
input marketCloseText = "Market Close";

def showLines = If(GetDay() == GetLastDay(), 1, If(showTodayOnly, 1.0, 0.0));

AddVerticalLine(isTime(marketOpen) && showLines && showMarketOpen, Floor(marketOpen / 100) + ":" + AsText(marketOpen % 100, "%02.0f") + " " + marketOpenText, GetColor(1));
AddVerticalLine(isTime(zombieTime) && showLines && showZombieTime, Floor(zombieTime / 100) + ":" + AsText(zombieTime % 100, "%02.0f") + " " + zombieText, Color.YELLOW);
AddVerticalLine(isTime(zombieReversalTime) && showLines && showZombieReversalTime, Floor(zombieReversalTime / 100) + ":" + AsText(zombieReversalTime % 100, "%02.0f") + " " + zombieReversalText, Color.YELLOW);
AddVerticalLine(isTime(powerHourTime) && showLines && showPowerHour, Floor(powerHourTime / 100) + ":" + AsText(powerHourTime % 100, "%02.0f") + " " + powerHourText, Color.YELLOW);
AddVerticalLine(isTime(marketCloseTime) && showLines && showMarketClose, Floor(marketCloseTime / 100) + ":" + AsText(marketCloseTime % 100, "%02.0f") + " " + marketCloseText, GetColor(1));
