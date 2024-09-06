import { Button } from '@/components/ui/button';
import { TableRow, TableCell } from '@/components/ui/table';
import { Search, ArrowRight, X } from 'lucide-react';

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="w-3 h-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs-small font-medium">123</TableCell>
      <TableCell className="text-muted-foreground">Há 15 minutos</TableCell>
      <TableCell className="">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground"> Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Jhonatan Tavares</TableCell>
      <TableCell className="font-medium">R$ 250,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="w-3 h-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="w-3 h-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
