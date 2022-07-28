import pandas as pd
import pyreadr


data1 = pd.read_excel('data/RoboAdvisor Universe_20220630.xlsx', sheet_name='Connected Index', index_col=0)
data1.columns = list(map(lambda x: x.replace(' KS Equity','').replace(' US Equity','').replace(' US Equity',''), data1.columns))
data1 = data1[data1.index>'2002-09-30']
data2 = pd.read_excel('data/AbsoluteReturnIndex_20220630.xlsx', sheet_name='Fin', index_col=0)
data2.columns = list(map(lambda x: x.replace(' KS Equity','').replace(' US Equity','').replace(' Index',''), data2.columns))
data3 = pd.read_excel('data/Korea_Bond_ClosingQuotes_20220630.xlsx', sheet_name='Quote', index_col=0, skiprows=5)
data3= data3.iloc[1:]

strategy_info_bycustomer = pyreadr.read_r('data/strategy_info_bycustomer_strategic.rds')

data_assetprice = pd.concat([data1, data2], axis=1)
data_Bondrate = data3

print(1)