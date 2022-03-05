# Study name HS_BarATR_GH
# by hummingSloth https://github.com/hummingSloth/thinkorswim
# version 1.0

input ATRLength = 14;
def ATR = Round(Average(TrueRange(high,  close,  low),  ATRLength), 2);
def iv = Round(close() * (imp_volatility() / 15.87), 3);
AddLabel(yes, Concat("ATR=", ATR), Color.YELLOW);
AddLabel(yes, Concat("ExpM=", iv), Color.YELLOW);
