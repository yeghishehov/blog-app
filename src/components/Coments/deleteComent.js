export default function deleteComent (thisComent, coments, setComents) {
  const updateComents = coments.filter(coment => coment.id !== thisComent.id);

  localStorage.setItem("comentsStorage", JSON.stringify([...updateComents]));

  setComents([...updateComents]);
}
