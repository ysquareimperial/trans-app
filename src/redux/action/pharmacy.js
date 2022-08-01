import { uuid } from "uuidv4";
import store from "../store";
import {
  GET_CLIENT_INFO,
  GET_CLIENT_STATEMENT,
  GET_DRUG_LIST,
  GET_PHARM_STORE,
  GET_PURCHASE_ITEM,
  GET_STOCK_INFO,
  GET_STOCK_INFO_STORE,
  GET_STOCK_INFO_STORE_SHELF,
  GET_SUPPLIER_INFO,
  GET_SUPPLIER_STATEMENT,
  GET_TOP_SALES,
  PHARM_LOADING,
  PHARM_USER,
  RECEIPT_DATA,
  SALES,
  SUPPLIER_COUNT,
  GET_REORDER_LEVEL,
  GET_EXPIRY_ALERT,
  GET_TOTAL_DRUG,
} from "./actionType";
import { _fetchApi, _postApi } from "./api";

export const endpoint = "pharmacy";
export function getSupplierInfo() {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-suppliers?facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_SUPPLIER_INFO, payload: res.results });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getSupplierCount() {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-supplier-count?facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: SUPPLIER_COUNT, payload: res.results[0].num });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getReceiptData(repno) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-receipt-data?facilityId=${facilityId}&repno=${repno}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: RECEIPT_DATA, payload: res.results });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function deletePharmUsers(id) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/delete-pharm-users?facilityId=${facilityId}&id=${id}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: PHARM_USER, payload: res.results });
          dispatch(getPharmUser());
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getPharmUser() {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-pharm-users?facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: PHARM_USER, payload: res.results });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}
export function getPurchaseItem(from, to,query_type="") {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-purchase-item?facilityId=${facilityId}&from=${from}&to=${to}&query_type=${query_type}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          const arr = [];
          res.results &&
            res.results.forEach((state) => {
              arr.push({ ...state, enable: false });
            });
          dispatch({ type: GET_PURCHASE_ITEM, payload: arr });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getDrugSearch(searchValue,from,to) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-drug-search?facilityId=${facilityId}&searchValue=${searchValue}&from=${from}&to=${to}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          const arr = [];
          res.results &&
            res.results.forEach((state) => {
              arr.push({ ...state, enable: false });
            });
          dispatch({ type: GET_PURCHASE_ITEM, payload: arr });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getPharmStore() {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-pharm-store?facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_PHARM_STORE, payload: res.results });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getClientInfo() {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-client-info?facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_CLIENT_INFO, payload: res.results });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getDrugView(store, item_code, from, to, facilityId,drug_name,expiry_date) {
  // const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-drug-view?to=${to}&expiry_date=${expiry_date}&from=${from}&store=${store}&item_code=${item_code}&facilityId=${facilityId}&drug_name=${drug_name}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_PURCHASE_ITEM, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}
export function getDrugList() {
  // const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-drug-list`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_DRUG_LIST, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}
export function getSupplierStatement(from, to, supplier_code) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-supplier-statement?supplier_code=${supplier_code}&to=${to}&from=${from}&facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_SUPPLIER_STATEMENT, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getPatientAccountView(from, to, acct) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-patient-account-view?acct=${acct}&to=${to}&from=${from}&facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_CLIENT_STATEMENT, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getStockInfo(from, to) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-stock-info?to=${to}&from=${from}&facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_STOCK_INFO, payload: res.results[0] });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function _getStockInfoStore(from, to) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-stock-n-info-store?to=${to}&from=${from}&facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        console.log(res)
        if (res.success) {
          dispatch({ type: GET_STOCK_INFO_STORE, payload: res.results[0] });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getStockInfoShelf(from, to) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-stock-info-shelf?to=${to}&from=${from}&facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({
            type: GET_STOCK_INFO_STORE_SHELF,
            payload: res.results[0],
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getTotalDrug(filterText="") {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-total-drug?facilityId=${facilityId}&filterText=${filterText}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          console.log(res);
          dispatch({
            type: GET_TOTAL_DRUG,
            payload: res.results[0].totalDrugs,
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getTopSales(from, to) {
  const facilityId = store.getState().auth.user.facilityId;

  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    let url = `/${endpoint}/v1/get-top-sales?to=${to}&from=${from}&facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_TOP_SALES, payload: res.results });
          dispatch({ type: PHARM_LOADING, payload: false });
        }
      },
      (err) => {
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export function getExpiryAlert() {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-expiry-alert?facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_EXPIRY_ALERT, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getReorderLevel() {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-reorder-level?facilityId=${facilityId}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: GET_REORDER_LEVEL, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getSalesDrugs(query_type,from,to) {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-sales-drugs?facilityId=${facilityId}&query_type=${query_type}&from=${from}&to=${to}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: SALES, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function searchDrugSale(query_type,from,to,searchValue="") {
  const facilityId = store.getState().auth.user.facilityId;
  return (dispatch) => {
    let url = `/${endpoint}/v1/get-sales-drugs-search?searchValue=${searchValue}&facilityId=${facilityId}&query_type=${query_type}&from=${from}&to=${to}`;
    _fetchApi(
      url,
      (res) => {
        if (res.success) {
          dispatch({ type: SALES, payload: res.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function addSupplierInfo(
  data,
  callBack = (f) => f,
  fallBack = (f) => f
) {
  const facilityId = store.getState().auth.user.facilityId;
  _postApi(
    `/${endpoint}/v1/add-supplier-info?facilityId=${facilityId}`,
    data,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}

export function addNewPharmStore(
  data,
  callBack = (f) => f,
  fallBack = (f) => f
) {
  const facilityId = store.getState().auth.user.facilityId;
  const username = store.getState().auth.user.username;
  const busName = store.getState().auth.user.busName;
  _postApi(
    `/${endpoint}/v1/add-new-pharm-store?facilityId=${facilityId}&createdBy=${username}&pharm_name=${busName}`,
    data,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}

export function updateStock(data, callBack = (f) => f, fallBack = (f) => f) {
  _postApi(
    `/${endpoint}/v1/update-stock`,
    data,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}

export function addNewClent(data, callBack = (f) => f, fallBack = (f) => f) {
  const facilityId = store.getState().auth.user.facilityId;
  const username = store.getState().auth.user.username;
  const busName = store.getState().auth.user.busName;
  _postApi(
    `/${endpoint}/v1/add-new-client?facilityId=${facilityId}&createdBy=${username}&pharm_name=${busName}&userId=${username}`,
    data,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}

export function addPurchase(data, callBack = (f) => f, fallBack = (f) => f) {
  const arr = [];
  data.forEach((item) => {
    if (item.item_code === "") {
      arr.push({ ...item, item_code: uuid() });
    } else {
      arr.push(item);
    }
  });
  const facilityId = store.getState().auth.user.facilityId;
  _postApi(
    `/${endpoint}/v1/add-purchase?facilityId=${facilityId}`,
    arr,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}

export function supplierPayment(
  data,
  callBack = (f) => f,
  fallBack = (f) => f
) {
  _postApi(
    `/${endpoint}/v1/pay-supplier`,
    data,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}
export function DrugList(
  
  data,
  callBack = (f) => f,
  fallBack = (f) => f
)
{
  const facilityId = store.getState().auth.user.facilityId;
  _postApi(
    `/${endpoint}/v1/drug-list?facility_id=${facilityId}&query_type=insert`,
    data,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}


export function makeSale(data, callBack = (f) => f, fallBack = (f) => f) {
  _postApi(
    `/${endpoint}/v1/batch-selling`,
    data,
    (res) => {
      console.log(res);
      if (res.success) {
        callBack(res);
      }
    },
    (err) => {
      fallBack(err);
    }
  );
}

export function createUser(data = {}, success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: PHARM_LOADING, payload: true });
    const facilityId = store.getState().auth.user.facilityId;
    const user = store.getState().auth.user;
    _postApi(
      `/users/create?facilityId=${facilityId}`,
      { ...data, busName: user.busName, address: user.address },
      (result) => {
        console.log(result);
        if (result.msg) {
          alert(result.msg);
          // error(result);
          dispatch({ type: PHARM_LOADING, payload: false });
        } else {
          dispatch({ type: PHARM_LOADING, payload: false });
          success();
        }
      },
      (err) => {
        error();
        console.log(err);
        dispatch({ type: PHARM_LOADING, payload: false });
      }
    );
  };
}

export const searchTransactionByReceipt = (
  receiptNo,
  callback = (f) => f,
  error = (f) => f
) => {
  const facilityId = store.getState().auth.user.facilityId;
  _fetchApi(
    `/pharmacy/v1/get-reciept-data/?repno=${receiptNo}&facilityId=${facilityId}`,
    (data) => {
      if (data && data.results) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
      console.log(err);
    }
  );
};
export function getAllReport(setter, from, to, query_type) {
  return (dispatch)=>{
    const facilityId = store.getState().auth.user.facilityId;
    // const facilityId = store.getState().auth.activeBusiness.id;
  _fetchApi(
    `/pharmacy/v1/get-all-report?from=${from}&to=${to}&facilityId=${facilityId}&query_type=${query_type}`,
    (data) => {
      // console.log({DDATTA:data})
      if (data && data.results) {
        dispatch({type:'REPORT_LIST', payload:data.results})
        setter(data.results )
      }
    },
    (error) => {
      console.error({error})
    }
  )
  }
}