import { AuthProvider } from "./providers/AuthProvider";
import { ContactsProvider } from "./providers/ContactsProvider";
import { UserProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <UserProvider>
          <ContactsProvider>
            <RoutesMain />
          </ContactsProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};
