// components/clients.tsx
import  { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Client {
  id_client: number;
  nom_client: string;
  prenom_client: string;
  telephone_client: string;
  num_cni_client: string;
  date_nais: string;
}

export function ClientsTable() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    // Fetch data from API
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/clients"); // Change to your actual API endpoint
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <Table>
      <TableCaption>Client Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Client ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>CNI</TableHead>
          <TableHead className="text-right">Birthdate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id_client}>
            <TableCell className="font-medium">{client.id_client}</TableCell>
            <TableCell>
              {client.nom_client} {client.prenom_client}
            </TableCell>
            <TableCell>{client.telephone_client}</TableCell>
            <TableCell>{client.num_cni_client}</TableCell>
            <TableCell className="text-right">{client.date_nais}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Clients</TableCell>
          <TableCell className="text-right">{clients.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
