declare upper;

input ShowBullishFiveFifteenCloud = no;
input ShowBearishFiveFifteenCloud = no;
input showFiveFifteenEMALines = no;

def Period5min = AggregationPeriod.FIVE_MIN;
def Period15min = AggregationPeriod.FIFTEEN_MIN;
def AvgType = AverageType.EXPONENTIAL;
def na = double.nan;

################## 5Min 5/15 EMA Cross #################
def FiveMin5EMA = MovingAverage(AvgType, close(period = Period5min), 5);
def FiveMin15EMA = MovingAverage(AvgType, close(period = Period5min), 15);
plot FiveMin5EMAplot = if (FiveMin5EMA > Fivemin15EMA) and ShowBullishFiveFifteenCloud then FiveMin5EMA else if ((FiveMin5EMA < FiveMin15EMA) and ShowBearishFiveFifteenCloud) then FiveMin5EMA else Double.NaN;
plot FiveMin15EMAplot = if (FiveMin5EMA > Fivemin15EMA) and ShowBullishFiveFifteenCloud then FiveMin15EMA else if ((FiveMin5EMA < FiveMin15EMA) and ShowBearishFiveFifteenCloud) then FiveMin15EMA else Double.NaN;
FiveMin5EMAplot.SetHiding(!showFiveFifteenEMALines);
FiveMin15EMAplot.SetHiding(!showFiveFifteenEMALines);
DefineGlobalColor("5/15 Cross Bull", Color.GREEN);
DefineGlobalColor("5/15 Cross Bear", Color.LIGHT_RED);
AddCloud(FiveMin5EMAplot, FiveMin15EMAplot, GlobalColor("5/15 Cross Bull"), GlobalColor("5/15 Cross Bear"));
