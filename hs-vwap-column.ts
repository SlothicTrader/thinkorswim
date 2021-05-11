plot vwap = vwap();
AddLabel(yes, "vwap", Color.CurRENT);

AssignBackgroundColor(if close > vwap then Color.DARK_GREEN else if close < vwap then Color.DARK_RED else Color.DaRK_GREEN);