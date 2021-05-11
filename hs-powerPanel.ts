declar upper;

input showPositivePriceAction = yes;

AddLabel(showPositivePriceAction, "vwap", (if close() > vwap(period = AggregationPeriod.DAY) then Color.GREEN else Color.RED));