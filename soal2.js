let productBin = {
    "requestId": null,
    "data": [
        {
            "id": 100000057465,
            "storageId": 10000008207,
            "code": "A01-01-01-A",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 76,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000057466,
            "storageId": 10000002181,
            "code": "A01-01-01-B",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 71,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000065224,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 10,
            "createdTime": "2022-02-08T10:35:19Z",
        }
    ],
    "message": "success"
}


function calculateTotalQuantity(data, productCode) {
    let totalQuantity = 0;
    for (const item of data) {
        if (item.productCode === productCode) {
            totalQuantity += item.quantity;
        }
    }

    return totalQuantity;
}

// productCode yang ingin dicari
const targetProductCode = "FBR00040101";

// Fungsi untuk menghitung total quantity untuk produk tersebut
const totalQuantity = calculateTotalQuantity(productBin.data, targetProductCode);
console.log(`Total quantity untuk produk dengan code ${targetProductCode} adalah: ${totalQuantity}`);