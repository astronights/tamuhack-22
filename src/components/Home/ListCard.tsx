import { useEffect, useState } from "react";
import { getServices } from "../../api/service";
import { service } from "../../types/service";
import { subscription } from "../../types/subscription";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import "../../assets/css/Component.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  });
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Subscription</TableCell>
                <TableCell>Last Used</TableCell>
                <TableCell>Renewal Date</TableCell>
                <TableCell>Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.subscriptions
                .sort((s1, s2) => (s1.renewalDate < s2.renewalDate ? -1 : 1))
                .map((sub) => {
                  return (
                    <TableRow key={sub.serviceName}>
                      <TableCell>{sub.serviceName}</TableCell>
                      <TableCell>{sub.lastUsed}</TableCell>
                      <TableCell>{sub.renewalDate}</TableCell>
                      <TableCell>{sub.fee}</TableCell>
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
