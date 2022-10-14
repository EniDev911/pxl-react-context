import { Button, Stack, Container } from "react-bootstrap";
import { useEffect, useContext } from "react";
import context from "../my_context";

const Paginate = () => {

  const { page, setPage } = useContext(context);

  useEffect(() => {
    // detector de eventos
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        page === 1 ? setPage(1) : setPage(page - 1);
        return;
      } else if (e.key === "ArrowRight") {
        page === 20 ? setPage(20) : setPage(page + 1);
        return;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // se remueve una vez de desmonta el componente
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page]);

  return (
    <Container>
      <Stack
        direction="horizontal"
        gap={2}
        className="w-100 justify-content-between"
      >
        <Button
          variant="dark"
          onClick={() => {
            page === 1 ? setPage(1) : setPage(page - 1);
          }}
        >
          Anterior
        </Button>
        <p className="bg-dark text-light px-3 rounded-pill fs-3">{page}</p>
        <Button
          variant="dark"
          onClick={() => {
            page === 20 ? setPage(20) : setPage(page + 1);
          }}
        >
          Siguiente
        </Button>
      </Stack>
    </Container>
  );
};

export default Paginate;
