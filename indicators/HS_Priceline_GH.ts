# Study name HS_Priceline_GH
# by hummingSloth https://github.com/hummingSloth/thinkorswim
# version 1.0

declare upper;

input ShowDynamicPriceLine = yes;

def C = close;

#####Current price line tracker code#####

def RegMkt = SecondsFromTime(0930) >= 0 and SecondsTillTime(1600) > 0;

def CD = if RegMkt then close(period = AggregationPeriod.DAY) else C;

def PrLn = HighestAll(if IsNaN(CD[-1]) and !IsNaN(CD) then CD else Double.NaN);

plot PriceLine = if ShowDynamicPriceLine then PrLn else Double.NaN;

PriceLine.SetDefaultColor (CreateColor(200, 255, 200));
PriceLine.SetStyle (Curve.SHORT_DASH);
