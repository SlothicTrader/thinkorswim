declare upper;

def Period1Day = AggregationPeriod.DAY;

def isOutsidePDR = if (close(period = Period1Day) < low(period = Period1Day)[1]) or (close(period = Period1Day) > high(period = Period1Day)[1]) then yes else no;
def isInsidePDR = if (close(period = Period1Day) < high(period = Period1Day)[1]) and (close(period = Period1Day) > low(period = Period1Day)[1]) then yes else no;

AddLabel(isOutsidePDR, "Outside PDR", Color.UPTICK);
AddLabel(isInsidePDR, "Inside PDR", Color.ORANGE);
