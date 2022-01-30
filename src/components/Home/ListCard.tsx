import { useEffect, useState } from "react";
import { getServices } from "../../api/service";
import { service } from "../../types/service";
import { subscription } from "../../types/subscription";
import Card from "@mui/material/Card";
import { CardContent, Dialog } from "@mui/material";
import "../../assets/css/Component.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@material-ui/core/Button";

interface ListCardProps {
  subscriptions: subscription[];
}

const subscriptionServices: service[] = [];

const ListCard = (props: ListCardProps) => {
  const [subscriptionList, setSubscriptionList] = useState(props.subscriptions);
  const [services, setServices] = useState(subscriptionServices);

  useEffect(() => {
    getServices().then((serviceResponse: service[]) =>
      setServices(serviceResponse)
    );
  }, []);
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "10vw" }}>Subscription</TableCell>
                <TableCell style={{ width: "10vw" }}>Last Used</TableCell>
                <TableCell style={{ width: "10vw" }}>Renewal Date</TableCell>
                <TableCell style={{ width: "10vw" }}>Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscriptionList
                .sort((s1, s2) =>
                  s1.subscriptionDate < s2.subscriptionDate ? -1 : 1
                )
                .map((sub) => {
                  return (
                    <TableRow key={sub.service_id}>
                      <TableCell style={{ width: "10vw" }}>
                        <img
                          src={
                            services.filter(
                              (x) =>
                                x.name.toUpperCase() ===
                                sub.service_id.toUpperCase()
                            )[0].logourl
                          }
                          alt={sub.service_id}
                        />
                      </TableCell>
                      <TableCell style={{ width: "10vw" }}>
                        {sub.timestamp.toLocaleString()}
                      </TableCell>
                      <TableCell style={{ width: "10vw" }}>
                        {sub.subscriptionDate.toLocaleString()}
                      </TableCell>
                      <TableCell style={{ width: "10vw" }}>{sub.fee}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ListCard;
