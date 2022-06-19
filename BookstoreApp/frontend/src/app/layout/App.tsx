import React from "react";
import { Container } from "semantic-ui-react";
import CategoryDashboard from "../../features/dashboard/categories/CategoryDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import CategoryForm from "../../features/dashboard/categories/form/CategoryForm";
import CategoryDetails from "../../features/dashboard/categories/CategoryDetails";
import Navbar from "../../features/components/NavBar";
import Dashboard from "../../features/dashboard/Dashboard";
import StoreDashboard from "../../features/dashboard/stores/StoreDashboard";
import StoreDetails from "../../features/dashboard/stores/StoreDetails";
import StoreForm from "../../features/dashboard/stores/form/StoreForm";
import BookDetails from "../../features/dashboard/books/BookDetails";
import BookDashboard from "../../features/dashboard/books/BookDashboard";
import BookForm from "../../features/dashboard/books/form/BookForm";
import SupplierForm from "../../features/dashboard/suppliers/form/SupplierForm";
import SupplierDetails from "../../features/dashboard/suppliers/SupplierDetails";
import SupplierDashboard from "../../features/dashboard/suppliers/SupplierDashboard";
import LoginForm from "../../features/users/LoginForm";
import OrderDashboard from "../../features/dashboard/orders/OrderDashboard";
import OrderDetails from "../../features/dashboard/orders/OrderDetails";
import OrderForm from "../../features/dashboard/orders/form/OrderForm";
import StockForm from "../../features/dashboard/stock/form/StockForm";
import StockDashboard from "../../features/dashboard/stock/StockDashboard";
import StockDetails from "../../features/dashboard/stock/StockDetails";
import UserDashboard from "../../features/dashboard/users/UserDashboard";
import UserDetails from "../../features/dashboard/users/UserDetails";
import UserForm from "../../features/dashboard/users/form/UserForm";
import RoleDashboard from "../../features/dashboard/roles/RoleDashboard";
import RoleDetails from "../../features/dashboard/roles/RoleDetails";
import RoleForm from "../../features/dashboard/roles/form/RoleForm";
import RegisterForm from "../../features/users/RegisterForm";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/categories" element={<CategoryDashboard />} />
          <Route
            path="/dashboard/categories/:categoryId"
            element={<CategoryDetails />}
          />
          <Route
            key={location.key}
            path="/dashboard/categories/createCategory"
            element={<CategoryForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/category/:categoryId"
            element={<CategoryForm />}
          />

          <Route path="/dashboard/stores" element={<StoreDashboard />} />
          <Route path="/dashboard/stores/:storeId" element={<StoreDetails />} />
          <Route
            key={location.key}
            path="/dashboard/stores/createStore"
            element={<StoreForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/store/:storeId"
            element={<StoreForm />}
          />

          <Route path="/dashboard/books" element={<BookDashboard />} />
          <Route path="/dashboard/books/:bookId" element={<BookDetails />} />
          <Route
            key={location.key}
            path="/dashboard/books/createBook"
            element={<BookForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/book/:bookId"
            element={<BookForm />}
          />

          <Route path="/dashboard/suppliers" element={<SupplierDashboard />} />
          <Route
            path="/dashboard/suppliers/:supplierId"
            element={<SupplierDetails />}
          />
          <Route
            key={location.key}
            path="/dashboard/suppliers/createSupplier"
            element={<SupplierForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/supplier/:supplierId"
            element={<SupplierForm />}
          />

          <Route path="/dashboard/orders" element={<OrderDashboard />} />
          <Route path="/dashboard/orders/:orderId" element={<OrderDetails />} />
          <Route
            key={location.key}
            path="/dashboard/orders/createOrder"
            element={<OrderForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/orders/:orderId"
            element={<OrderForm />}
          />

          <Route path="/dashboard/stocks" element={<StockDashboard />} />
          <Route path="/dashboard/stocks/:stockId" element={<StockDetails />} />
          <Route
            key={location.key}
            path="/dashboard/stocks/createStock"
            element={<StockForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/stocks/:stockId"
            element={<StockForm />}
          />

          <Route path="/dashboard/users" element={<UserDashboard />} />
          <Route path="/dashboard/users/:userId" element={<UserDetails />} />
          <Route
            key={location.key}
            path="/dashboard/users/createUser"
            element={<UserForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/users/:userId"
            element={<UserForm />}
          />

          <Route path="/dashboard/roles" element={<RoleDashboard />} />
          <Route path="/dashboard/roles/:roleId" element={<RoleDetails />} />
          <Route
            key={location.key}
            path="/dashboard/roles/createRole"
            element={<RoleForm />}
          />
          <Route
            key={location.key}
            path="/dashboard/manage/roles/:roleId"
            element={<RoleForm />}
          />

          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
