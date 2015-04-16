CREATE OR REPLACE FUNCTION notify_new_event() RETURNS trigger AS $$
DECLARE
BEGIN
  PERFORM pg_notify('watchers', NEW.type || '|' || NEW.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS new_event ON events;
CREATE TRIGGER new_event AFTER INSERT ON events
  FOR EACH ROW EXECUTE PROCEDURE notify_new_event();
